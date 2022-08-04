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
    // Specify Alice's interact interface here
    startRaffle: Fun([], Object({ //Alice frontend will send this data
      nftID: Token,
      numTickets: UInt,
    })),
    seeHash: Fun([Digest], Null),
  });
  const B = Participant('Bob', {
    ...Shared,
    showNum: Fun([UInt], Null),
    seeWinner: Fun([UInt], Null),
    // Specify Bob's interact interface here
  });
  init();
  A.only(() =>{
    const {nftID, numTickets} = declassify(interact.startRaffle());
    const _winningNum = interact.getNum(numTickets); //this number IS SECRET !!!
    const [_commitValue, _saltA] = makeCommitment(interact, _winningNum);
    const commitValue = declassify(_commitValue);
  })
  A.publish(nftID, numTickets, commitValue);
  A.interact.seeHash(commitValue)
  commit();
  // NOW the contract exists
  A.pay([[amt, nftID]]); // HOW MANY and WHAT
  commit();

  unknowable(B, A(_winningNum, _saltA)); //B cannot know this values!

  B.only(() => {
    const myNum = declassify(interact.getNum(numTickets));
    interact.showNum(myNum);
  })
  B.publish(myNum);
  commit();

  // REVEAL THE PRIVATE VALUES
  A.only(() => {
    const saltA = declassify(_saltA);
    const winningNum = declassify(_winningNum);
  })
  A.publish(saltA, winningNum);
  //check that "A" does not change anything: I TRUST NO ONE !!!
  checkCommitment(commitValue, saltA, winningNum);

  //show the winning num to Bob
  B.interact.seeWinner(winningNum);

  const outcome = (myNum == winningNum ? 1 : 0); //check the outcome

  transfer(amt, nftID).to(outcome == 0 ? A : B); //check if Bob is the winner

  each([A, B], () => {
    interact.seeOutcome(outcome);
  })

  commit();

  // write your program here
  exit();
});
