'reach 0.1';

const amt = 1; //constant 

const Shared = {
  getNum: Fun([UInt], UInt),
  seeOutcome: Fun([UInt], Null),
}
export const main = Reach.App(() => {
  const A = Participant('Alice', {
    ...Shared,
    ...hasRandom,
    ...hasConsoleLogger,
    // Specify Alice's interact interface here
    startRaffle: Fun([], Object({ //Alice frontend will send this data
      nftID: Token,
      numTickets: UInt,
    })),
    seeHash: Fun([Digest], Null),
    ready: Fun([], Null),
    showWinningNum: Fun([UInt], Null),
    sendOutcome: Fun([UInt], Null),
  });

  const [ isOutcome, USER_WIN, USER_LOOSE ] = makeEnum(2);
  const compute_winner = (user_win, user_loose) => (user_win == user_loose ? 0 : 1);
  forall(UInt, user_win => 
    forall(UInt, user_loose => 
      assert(isOutcome(compute_winner(user_win, user_loose)))
    )  
  )

  const attachersAPI = API('attachersAPI',{
    insertNum: Fun([UInt], UInt),
    checkWinner: Fun([], Bool), //return if you have won or not
  });
  setOptions({ untrustworthyMaps: true });
  init();
  A.only(() =>{
    const {nftID, numTickets} = declassify(interact.startRaffle());
    const _winningNum = interact.getNum(numTickets); //this number IS SECRET !!!
    const [_commitValue, _saltA] = makeCommitment(interact, _winningNum);
    const commitValue = declassify(_commitValue);
    assume(numTickets >= 1);
  })
  A.publish(nftID, numTickets, commitValue);
  A.interact.seeHash(commitValue)
  commit();
  // NOW the contract exists
  A.pay([[amt, nftID]]); // HOW MANY and WHAT
  commit();

  A.publish();
  A.only(() => {
    interact.ready();
  })
  const mapUserNumbers = new Map(UInt);
  
  //allow the users to insert they numbers
  const numberOfTickets_counter = 
  parallelReduce(0) 
    .invariant(balance() == 0 && balance(nftID) == amt) 
    .while(numberOfTickets_counter < numTickets)
    .api(attachersAPI.insertNum,
      (num, y) => { 
          //unknowable(attachersAPI, A(_winningNum, _saltA)); //Users cannot know this values!
          y(num); //show the number to the Users when they select it
          //store the ticket inside the map
          mapUserNumbers[this] = num;
          return numberOfTickets_counter + 1; //add one ticket to the counter, until will reach 9 (start from 0)
      }
    )

  // REVEAL THE PRIVATE VALUES
  A.only(() => {
    const saltA = declassify(_saltA);
    const winningNum = declassify(_winningNum);
  })
  commit();
  A.publish(saltA, winningNum);
  
  //check that "A" does not change anything: I TRUST NO ONE !!!
  checkCommitment(commitValue, saltA, winningNum);
  //Show the winning num
  A.interact.showWinningNum(winningNum);

  // check the winner
  const [keepGoing, users_counter, winner] = 
  parallelReduce([true, numTickets, A]) 
    .invariant(balance() == balance() && balance(nftID) == amt) 
    .while( keepGoing && (users_counter >= 1))
    .api(attachersAPI.checkWinner,
      (y) => { 
        //A.interact.log("counter ", users_counter)
        const value_bob = fromSome(mapUserNumbers[this], 0);
        const outcome_result = compute_winner(value_bob, winningNum);
        if(outcome_result == USER_WIN){ //check if the number, associated to my address in the map, is the winning number
          y(true);
          return [false, users_counter - 1, this]; //stop the loop, setting keepGoing to false
        }else{
          y(false); //return false which means that you are not whe winner
          return [true, users_counter - 1, A]; //the loop keep going on
        }
      }
    )


    commit();
    A.publish();


    
  if (balance(nftID) >= amt){
    transfer(amt, nftID).to(winner);
    //sendOutcome(USER_WIN);
  }
  if (balance() > 0){
    transfer(balance()).to(A);
    //sendOutcome(USER_LOOSE);
  }

  commit();
  exit();
});
