// #region Imports
const MainContract = require("./contracts/MainVotingC.json");
const BoothDeployerContract = require("./contracts/VotingBoothDeployer.json");
const BoothContract = require("./contracts/VotingBoothC.json");
const ECcontract = require("./contracts/EC.json");
const FastECmulContract = require("./contracts/FastEcMul.json");

const config = require("./config.json");
const Authority = require("../smartcontracts/lib/authority.js");
const Voter = require("../smartcontracts/lib/voter.js");
const Utils = require("../smartcontracts/lib/utils.js");
const ec = require('simple-js-ec-math');

const { deployContract, link } = require("./utils/contractDeployer.js");
const db = require("./database.js");

const Web3 = require("web3");
const Booth = require("../smartcontracts/lib/booth.js");
const web3 = new Web3(config.network);
const authorityAcc = web3.eth.accounts.privateKeyToAccount(config.account_pk);
const faucetAcc = web3.eth.accounts.privateKeyToAccount(config.faucet_pk);

const utils = new Utils();
const _ = require('lodash');
const { countDocuments } = require("./db-models/election.model.js");

const G = new ec.ModPoint(BigInt(config.Gx), BigInt(config.Gy));
const curve = new ec.Curve(0n, 7n, BigInt(config.NN) , BigInt(config.PP), G);
// #endregion

// #region Utility Functions
async function sendEth(address) {
  console.log("[sendEth] Entered");
  if (!Web3.utils.isAddress(address)) {
    return false;
  }

  const tx = {
    from: faucetAcc.address,
    to: address,
    value: web3.utils.toWei("1", "ether"),
  };

  try {
    const gas = await web3.eth.estimateGas(tx);
    await web3.eth.sendTransaction({ ...tx, gas });
    console.log("[sendEth] Completed");
    return true;
  } catch (e) {
    console.error(e);
    console.log("[sendEth] Completed");
    return false;
  }
}

async function sendTransaction(method, address = authorityAcc.address) {
  console.log("[sendTransaction] Entered");
  try {
    const gas = await method.estimateGas({ from: address });
    const tx = await method.send({ from: address, gas });
    console.log('gas', gas);
    console.log("[sendTransaction] Completed");
    return tx;
  } catch (e) {
    console.error(e);
    console.log("[sendTransaction] Completed");
    return false;
  }
}

async function getboothCnt(mainVotingC) {
  console.log("[getboothCnt] Entered");
  const voterCnt = await mainVotingC.methods.getCntOfEligibleVoters().call();
  const boothCnt = Math.ceil(voterCnt / config.split_batch);
  console.log("[getboothCnt] Completed");
  return boothCnt;
}
// #endregion

// #region Voting Functions
async function computeBlindedVotesSum(address) {
  console.log("[ComputeBlindedVotesSum] Entered");
  const mainVotingC = await new web3.eth.Contract(MainContract.abi, address);
  const boothCnt = await getboothCnt(mainVotingC);

  for(let i = 0; i < boothCnt; i ++){
    const boothAddr = await mainVotingC.methods.booths(i).call();
    const boothContract = await new web3.eth.Contract(
      BoothContract.abi,
      boothAddr
    )
    while(true){
      const method = boothContract.methods.computeBlindedVotesSum();
      const tx = await sendTransaction(method);

      if(tx.events.BlindedVotesSumComputed){
        console.log('BlindedVotesSumComputed');
        break;
      }
    }
  }
  console.log("[ComputeBlindedVotesSum] Completed");
}

async function computeGroupTallies(address, fastECaddress) {
  console.log("[computeGrouptallies] Entered");
  const mainVotingC = await new web3.eth.Contract(MainContract.abi, address);
  const fastEC = await new web3.eth.Contract(FastECmulContract.abi, fastECaddress);

  const candidatesCnt = await mainVotingC.methods.getCntOfCandidates().call();

  const boothCnt = await getboothCnt(mainVotingC);

  for(let i = 0; i < boothCnt; i++){
    const boothAddr = await mainVotingC.methods.booths(i).call(); 
    const boothContract = await new web3.eth.Contract(
      BoothContract.abi,
      boothAddr
    )
    const booth = new Booth(boothAddr, i, G, curve);
  
    let decomp = [];
    for(let j = 0; j < candidatesCnt; j++){
      const boothTally = BigInt(await boothContract.methods.getVotes(j).call({from: authorityAcc.address}));
      const tmpItems = await fastEC.methods.decomposeScalar(Web3.utils.numberToHex(boothTally.toString(10)), config.NN, config.lambda).call();
      decomp.push(BigInt(tmpItems[0]));
      decomp.push(BigInt(tmpItems[1]));
  
    }

    const invModArrs = await boothContract.methods.modInvCache4Tally(utils.BIarrayToHexUnaligned(decomp)).call({from: authorityAcc.address});
    const method = boothContract.methods.computeTally(utils.BIarrayToHexUnaligned(decomp), invModArrs);
    const tx = await sendTransaction(method);
  }

  let finalTallyStr = []
  const finalTally = await mainVotingC.methods.getFinalTally().call({from: authorityAcc.address});
  console.log(finalTally);
  for (let i = 0; i < candidatesCnt; i++) {
    var comp = (BigInt(finalTally[2 * i].toString()) + BigInt(finalTally[2 * i + 1].toString()) * BigInt(config.lambda)) % BigInt(config.NN);
    finalTallyStr.push(comp.toString());
  }
  console.log("Final Tally:", finalTallyStr);


  console.log("[computeGrouptallies] Completed");
}

async function submitVote(address, vote) {
  boothContract = await new web3.eth.Contract(BoothContract.abi, address);
  const method = boothContract.methods.recordVote(Number(vote));
  const tx = await sendTransaction(method);
  console.log(tx);
}

async function precomputeMPCkeys(address) {
  console.log("[precomputeMPCkeys] Entered");
  const mainVotingC = await new web3.eth.Contract(MainContract.abi, address);
  
  const boothCnt = await getboothCnt(mainVotingC);

  for (let i = 0; i < boothCnt; i++) {
    const boothAddr = await mainVotingC.methods.booths(i).call();
    const boothContract = await new web3.eth.Contract(
      BoothContract.abi,
      boothAddr
    );
    
 //   const rightMarkersComputed = await boothContract.methods.rightMarkersComputed().call();

    while (true) {
      try{
          const method = boothContract.methods.buildRightMarkers4MPC();
          const tx = await sendTransaction(method);
          if (!tx) {
            return false;
          }      
          console.log('iteration', i);
          console.log(tx);
        
          if (tx.events?.RightMarkersComputed) {
            console.log('***rightMarkersComputed');
            break;
          }
        }catch(e){
          console.error(e);
        }
      }
  }
  console.log("[precomputeMPCkeys] Completed");
}

async function finishSignUp(address) {
 // await submitPKs(address)

  console.log("[finishSignUp] Entered");
  const mainVotingC = await new web3.eth.Contract(MainContract.abi, address);

  const boothCnt = await getboothCnt(mainVotingC);

  for (let i = 0; i < boothCnt; i++) {
    const boothAddr = await mainVotingC.methods.booths(i).call();
    const boothContract = await new web3.eth.Contract(
      BoothContract.abi,
      boothAddr
    );

    const method = boothContract.methods.changeStageToPreVoting();
    await sendTransaction(method);
  }
  console.log("[finishSignUp] Completed");
}

async function computeMPCKeys(address) {
  console.log("[computeMPCKeys] Entered");
  const mainVotingC = await new web3.eth.Contract(MainContract.abi, address);

  const boothCnt = await getboothCnt(mainVotingC);

  for (let i = 0; i < boothCnt; i++) {
    const boothAddr = await mainVotingC.methods.booths(i).call();
    const boothContract = await new web3.eth.Contract(
      BoothContract.abi,
      boothAddr
    );
    const boothVotersCnt = await boothContract.methods.getCntOfSubmitedPKs().call();
    
    
    const g_x = utils.toPaddedHex(config.Gx, 32);
    const g_y = utils.toPaddedHex(config.Gy, 32);
    let act_left = [g_x, g_y, 1];
    console.log('boothVotersCnt:', boothVotersCnt);
    for (let j = 0; j < boothVotersCnt; j += config.mpc_batch_size) {
      try {

        j = Math.min(j, boothVotersCnt - 1);
        console.log('j:', j, ', act_left:', act_left);
        const invModArrsMPC = await boothContract.methods
        .modInvCache4MPCBatched(j, act_left)
        .call();

        console.log("inv", invModArrsMPC);
        act_left = invModArrsMPC[2];

        const method = boothContract.methods.computeMPCKeys(
          invModArrsMPC[1],
          invModArrsMPC[0]
        );
        console.log(await sendTransaction(method));
      } catch (e) {
        console.error(e);
      }
    }
  }
  console.log("[computeMPCKeys] Completed");
}

async function enrollVoters(address) {
  console.log("[enrollVoters] Entered");
  const election = await db.findElection(address);
  const voters_c = election?.voters.length ?? 0;
  const mainVotingC = await new web3.eth.Contract(MainContract.abi, address);

  for (let i = 0; i < voters_c; i += config.enroll_batch) {
    let cnt =
      i + config.enroll_batch - 1 < voters_c
        ? config.enroll_batch
        : voters_c % config.enroll_batch;
    let batch = election.voters.slice(i, cnt);
    const method = mainVotingC.methods.enrollVoters(batch);

    const result = await sendTransaction(method);
    if (result) {
      batch.forEach(async (address) => await sendEth(address));
    }
  }

 // await enrollVotersTest(address);
  console.log("[enrollVoters] Completed");
}

async function splitGroups(address) {
  console.log("[splitGroups] Entered");
  const election = await db.findElection(address);
  const mainVotingC = new web3.eth.Contract(MainContract.abi, address);
  const voterCnt = await mainVotingC.methods.getCntOfEligibleVoters().call();

  for (let i = 0; i < voterCnt; i += config.split_batch) {
    const method = mainVotingC.methods.splitGroups(i, config.split_batch, 1);
    console.log('requesting splitGroups', i, config.split_batch, 1);
    const tx = await sendTransaction(method);
  }

  for (
    let i = 0;
    i < Math.ceil(voterCnt / config.split_batch);
    i += config.deploy_batch
  ) {
    const method = mainVotingC.methods.deployBooths(
      i,
      config.deploy_batch,
      election.votingFuncAddress,
      election.votingCallsAddress
    );
    await sendTransaction(method);
  }
  console.log("[splitGroups] Completed");
}

async function deployContracts(election) {
  console.log("[deployContracts] Entered");
  const candidates = election.candidates.map((candidate) => candidate.name);
  const n = candidates.length;

  if (n < 2) {
    throw new Error("election with less than 2 candidates cannot be created");
  }

  const authority = new Authority(
    n,
    10,
    config.Gx,
    config.Gy,
    config.PP,
    config.NN,
    1,
    0
  );

  const ECaddress = await deployContract(ECcontract);

  let fastECmulContract = _.cloneDeep(require("./contracts/FastEcMul.json"));
  fastECmulContract = await link(fastECmulContract, ECcontract.contractName, ECaddress);
  const fastECmulAddress = await deployContract(FastECmulContract);

  let votingFuncContract = _.cloneDeep(require("./contracts/VotingFunc.json"));
  votingFuncContract = await link(votingFuncContract, ECcontract.contractName, ECaddress);
  votingFuncContract = await link(votingFuncContract, fastECmulContract.contractName, fastECmulAddress);
  const votingFuncAddress = await deployContract(votingFuncContract);

  let VotingCallsContract = _.cloneDeep(require("./contracts/VotingCalls.json"));
  VotingCallsContract = await link(VotingCallsContract, ECcontract.contractName, ECaddress);
  VotingCallsContract = await link(VotingCallsContract, fastECmulContract.contractName, fastECmulAddress);
  const votingCallsAddress = await deployContract(VotingCallsContract);

  const boothDeployerAddress = await deployContract(BoothDeployerContract);

  const mainVotingAddress = await deployContract(MainContract, [
    candidates,
    authority.candidateGens,
    config.mpc_batch_size,
    config.rm_batch_size,
    boothDeployerAddress,
  ]);

  const newElection = {
    ...election,
    ECaddress,
    fastECmulAddress,
    boothDeployerAddress,
    mainVotingAddress,
    votingFuncAddress,
    votingCallsAddress,
    mpcBatchSize: 3,
    rmBatchSize: 100,
  };
  console.log("election deployed", election.name, mainVotingAddress);
  console.log("[deployContracts] Completed");
  return newElection;
}

async function tally(address) {
  console.log("[tally] Entered");
  throw new Error("Not implemented");
  console.log("[tally] Completed");
}
// #endregion
// #region testing

  async function enrollVotersTest(address) {
    console.log("[enrollVotersTest] Entered");
    const mainVotingC = new web3.eth.Contract(MainContract.abi, address);
    const election = await db.findElection(address);
    const voters = (await web3.eth.getAccounts()).slice(1).filter((voter) => !election.voters.includes(voter));
    const method = mainVotingC.methods.enrollVoters(voters);
    console.log(voters);
    await sendTransaction(method);
    console.log("[enrollVotersTest] Completed");
    for (let account of voters) {
      console.log(await mainVotingC.methods.isVoterEligible(account).call());
    }
  }

    var auth = new Authority(
      23, 
      15,
      config.Gx,
      config.Gy,
      config.PP,
      config.NN,
      config.GROUPS_CNT, 
      0);

  let PKs = [];
  
  async function submitPKs(address){
    PKs = [];
    const mainVotingC = new web3.eth.Contract(MainContract.abi, address);
    const election = await db.findElection(address);
    const voters = (await web3.eth.getAccounts()).slice(1).filter((voter) => !election.voters.includes(voter));
    for(let i = 1; i < voters.length; i++){
      const voter = new Voter(auth.G, auth.candidateGens_p, auth.candidates, auth.curve, voters[i], 0);
      PKs.push(voter.pK_pair);
      const votersGroup = await mainVotingC.methods.votersGroup(voters[i]).call();
      votersBoothAddr = await mainVotingC.methods.groupBoothAddr(votersGroup).call();

      const boothContract = new web3.eth.Contract(BoothContract.abi, votersBoothAddr);
      const method = boothContract.methods.submitVotersPK([voter.pK_pair[0], voter.pK_pair[1]]);
      await sendTransaction(method, voters[i]);
      console.log('PK submitted', voters[i]);
      console.log(votersGroup);
      console.log(await boothContract.methods.getCntOfSubmitedPKs().call());  
    }
  }




// #endregion
// #region Exports
module.exports = {
  finishSignUp,
  deployContracts,
  enrollVoters,
  splitGroups,
  precomputeMPCkeys,
  computeMPCKeys,
  tally,
  computeBlindedVotesSum,
  computeGroupTallies,
  submitVote
};
// #endregion
