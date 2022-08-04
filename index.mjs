import {loadStdlib} from '@reach-sh/stdlib';
import * as backend from './build/index.main.mjs';
const stdlib = loadStdlib(process.env);

//setting the call for reach api
const call = async (f) => {
  let res = undefined;
  try {
    res = await f();
    //console.log(`res`, res);
    return res;
  } catch (e) {
    res = [`err`, e]
    console.log(`res`, res);
    return false;
  }
};

const iBalance = stdlib.parseCurrency(2000);
const accAlice = await stdlib.newTestAccount(iBalance);
console.log("Hello Alice and Users");
console.log("Launching ...");
const ctcAlice = accAlice.contract(backend);
console.log("starting backend ...");


const OUTCOME = ['Your nombe is not a match', 'Your number matches!'];

const NUM_TICKETS_USERS = 3;


const Shared = {
  getNum: (numTickets) => {
    const num = (Math.floor(Math.random() * numTickets +1)); //random number between 0 and number of tickets
    return num;
  },
  seeOutcome: (num) => {
    console.log(`The outcome is ${OUTCOME[num]}`);
  },
}


console.log(`Creator is creating the testing NFT`);
const theNFT = await stdlib.launchToken(accAlice, "Mona Lisa", "NFT", {supply: 1});

const nftParams = {
  nftID: parseInt(theNFT.id),
  numTickets: NUM_TICKETS_USERS,
};



const startsBob = async () => {
  let ctc = null;
  let acc = null;
  let accArray = [];
  const newBob = async(who) => {
      acc = await stdlib.newTestAccount(iBalance);
      await acc.tokenAccept(nftParams.nftID); //optin to the token
      ctc = acc.contract(backend, ctcAlice.getInfo());
  }

  const attachBob = async(numChoose) =>{
      const attachersAPI = ctc.a.attachersAPI;
      const resultAPi = await call(() => attachersAPI.insertNum(numChoose));
      console.log("Your number is: ", parseInt(resultAPi));
      return resultAPi;
  }

  for(var i = 1; i < NUM_TICKETS_USERS+1; i++){
      console.log("creating a new bob user ...")
      var nameBob = "User"+i

      await newBob(nameBob);
      console.log(`Attaching ${nameBob}`);
      const result = await attachBob(Shared.getNum(nftParams.numTickets));
      await stdlib.wait(1);

      //inserting in the array only if bob has inserted the number
      if (result){
          accArray.push(acc);
      }
    }

  console.log(`Users are going to check who is the winner `);
  await stdlib.wait(1)
  for(var i = 0; i<NUM_TICKETS_USERS; i++){
    await stdlib.wait(5)
    const ctc2 = accArray[i].contract(backend, ctcAlice.getInfo());
    const winnerAPI_Attachers = ctc2.a.attachersAPI;
    const winner_result = await call(() => winnerAPI_Attachers.checkWinner());
    //check the winners
    const result_winner = (winner_result ? `${accArray[i].getAddress()} have won` : `${accArray[i].getAddress()} have not won`);
    console.log(`Output: ${result_winner}`);
    if(winner_result){ //if there is a winner, stop calling api process
      break;
    } 
  }

 
}

//initialize interact using Reach stdlib
const interact = {  
  ...stdlib.hasRandom,
  ...Shared
}; 



interact.startRaffle = async () => {
    console.log(`The raffle information which are NFT id and number of tickets are being sent to the contract`);
    return nftParams;
}

interact.seeHash = async (value) => {
    console.log(`The winning number Hash is: ${value}`);
}

interact.ready = async() => {
    console.log("Users will attach to the contract!");
    startsBob();
}

interact.log = async (...args) => {
  console.log(...args)
}; 
const part = backend.Alice;
await part(ctcAlice, interact);


console.log("The lottery is over.")
console.log('Goodbye, Alice and Users!');
