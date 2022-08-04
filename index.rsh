'reach 0.1';
const amt = 1;
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
  });
  // const B = Participant('Bob', {
  //   ...Shared,
  //   showNum: Fun([UInt], Null),
  //   seeWinner: Fun([UInt], Null),
  //   // Specify Bob's interact interface here
  // });

  const attachersAPI = API('attachersAPI',{
    // ...Shared,
    // showNum: Fun([UInt], Null),
    // seeWinner: Fun([UInt], Null),
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
  
  const numberOfTickets_counter = 
  parallelReduce(0) 
    .invariant(balance() == 0 && balance(nftID) == amt) 
    .while(numberOfTickets_counter < numTickets)
    .api(attachersAPI.insertNum,
      (num, y) => { 
          //check();
          //commit();
          //unknowable(attachersAPI, A(_winningNum, _saltA));
          //A.publish();
          //unknowable(this, A(_winningNum, _saltA)); //Users cannot know this values!
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

  // check the winner
  const [keepGoing, winner] = 
  parallelReduce([true, A]) 
    .invariant(balance() == balance() && balance(nftID) == amt) 
    .while( keepGoing )
    .api(attachersAPI.checkWinner,
      (y) => { 
        const value = fromSome(mapUserNumbers[this], 0);
        if(value == winningNum){ //check if the number, associated to my address in the map, is the winning number
          y(true);
          return [false, this]; //stop the loop, setting keepGoing to false
        }else{
          y(false); //return false which means that you are not whe winner
          return [true, A]; //the loop keep going on
        }
      }
    )


    commit();
    A.publish();



  // const outcome = (myNumTickets == winningNum ? 1 : 0); //check the outcome

  // transfer(amt, nftID).to(outcome == 0 ? A : B); //check if Bob is the winner


  if (balance(nftID) >= amt){
    transfer(amt, nftID).to(winner);
  }
  if (balance() > 0){
    transfer(balance()).to(A);
  }

  commit();

  exit();
});
