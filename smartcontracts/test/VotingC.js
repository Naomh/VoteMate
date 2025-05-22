// Authors: authors of BBB-voting (https://arxiv.org/pdf/2010.09112.pdf), Ivana Stančíková

const MainVotingC = artifacts.require('MainVotingC');
const VotingBoothC = artifacts.require('VotingBoothC');
const VotingFunc = artifacts.require('VotingFunc');
const VotingCalls = artifacts.require('VotingCalls');
const FastEC = artifacts.require('FastEcMul');

var config = require("../lib/config.js");
var Authority = require("../lib/authority.js");
var Voter = require("../lib/voter.js");
var Utils = require("../lib/utils.js");
const Booth = require("../lib/booth.js");
const ec = require('simple-js-ec-math');

var Web3 = require('web3');
var W3 = new Web3();
//const { assert } = require("console");

var utils = new Utils();

contract('MainVotingC', function(accounts) {

  var authority = accounts[0];
  var auth = new Authority(
    config.CANDIDATES_CNT, 
    config.VOTERS_CNT,
    config.Gx,
    config.Gy,
    config.PP,
    config.NN,
    config.GROUPS_CNT, 
    config.FAULTY_VOTERS);
  var voters = [];

  const minGroupSize = 3;
  const enroll_batch = config.ENROLL_BATCH; // 250, max cca 270
  const split_batch = config.SPLIT_BATCH; // 200;

  var votingc;
  var booths = [];

  before(async () => {
    votingc = await MainVotingC.deployed();
    console.log("MainVotingC deployed.");

    console.log("\nCnt of voters: ", config.VOTERS_CNT);
    console.log("Cnt of faulty voters: ", config.FAULTY_VOTERS);
    console.log("Enroll batch size: ", enroll_batch);
    console.log("Cnt of groups/booths: ", config.GROUPS_CNT);
    console.log("Split group batch size: ", split_batch);
    console.log("Cnt of candidates: ", config.CANDIDATES_CNT);
    console.log("MPC_batch_size: ", config.MPC_BATCH_SIZE);
    console.log("RM_batch_size: ", config.RM_BATCH_SIZE);
  });

  it("Enroll voters", async () => {
    voters = createAllVoters(auth, accounts);
    var candCnt = await votingc.getCntOfCandidates.call();
    assert.equal(candCnt, auth.candidates.length);
    var votersCnt  = await votingc.getCntOfEligibleVoters.call();
    assert.equal(votersCnt, 0);

    var enroll_addrs = auth.getVoterAddrs(accounts);
    var gasUsedEnroll = 0;

    for (let i = 0; i < auth.cntVoters; i += enroll_batch) {
      let cnt = (i + enroll_batch - 1) < auth.cntVoters ? enroll_batch : (auth.cntVoters % enroll_batch); 
      let batch = enroll_addrs.slice(i, i + cnt);
      var receipt = await votingc.enrollVoters(batch, { from: authority, gas: 12 * 1000 * 1000 });
      console.log(`\t \\/== Gas used in enrollVoters batch with start_idx ${i}:`, receipt.receipt.gasUsed);
      gasUsedEnroll += receipt.receipt.gasUsed;
    }

    console.log(`\t \\/== Gas used in enrollVoters:`, gasUsedEnroll);

    votersCnt = await votingc.getCntOfEligibleVoters.call()
    assert.equal(votersCnt, auth.cntVoters);
  }).timeout(0);

  it("Split to groups and deploy booth contracts", async () => {
    var gasUsedSplit = 0;
    for (let i = 0; i < auth.cntVoters; i += split_batch) {
      var receipt = await votingc.splitGroups(i, split_batch, auth.votingGroupsCnt, { from: authority, gas: 12 * 1000 * 1000 });
      console.log(`\t \\/== Gas used in splitGroups batch with start_idx ${i}:`, receipt.receipt.gasUsed);
      gasUsedSplit += receipt.receipt.gasUsed;
    }
    
    console.log(`\t \\/== Gas used in splitGroups:`, gasUsedSplit);

    var votingfunc = await VotingFunc.deployed();
    var votingcalls = await VotingCalls.deployed();

    // deploy booths in batches to fit block gas limit
    var deploy_batch = 2;
    var gasUsedDeploy = 0;
    for (let i = 0; i < auth.votingGroupsCnt; i += deploy_batch) {
      var receipt = await votingc.deployBooths(i, deploy_batch, votingfunc.address, votingcalls.address, { from: authority, gas: 12 * 1000 * 1000 });
      gasUsedDeploy += receipt.receipt.gasUsed;


      receipt.receipt.logs.forEach( e => {
        if(e.event !== undefined && e.event == "BoothCreated") {
          booths.push(new Booth(e.args.boothAddr, e.args.group.toNumber(), auth.G, auth.curve));
         //console.log("Booth addr: ", e.args.boothAddr.toString(), " Group: ", e.args.group.toNumber());
        }
      })
    }
    
    console.log(`\t \\/== Gas used in deployBooths:`, gasUsedDeploy);

    assert.equal(booths.length, auth.votingGroupsCnt);
  }).timeout(0);

  it("Call booth contract", async () => {
    for (let i = 0; i < booths.length; i++) {
      let booth = await VotingBoothC.at(booths[i].address);
      let boothVotersCnt = await booth.getCntOfVoters();
      booths[i]._cntVoters = boothVotersCnt;
      booths[i]._faultyVotersCnt = 0;
      
      console.log("Booth ", i, " voter count: ", boothVotersCnt.toNumber());

      assert(boothVotersCnt.toNumber() >= minGroupSize);
    }
  }).timeout(0);

  it("Submit PKs by voters", async () => {

    var gasUsedSubmitPK = 0;

    for(let i = 0; i < voters.length; i++) {
      // for each voter, find booth(addr) voter belongs to
      let votersGroup = await votingc.votersGroup.call(voters[i].address)
      let votersBoothAddr = await votingc.groupBoothAddr.call(votersGroup);
 
      voters[i]._group = votersGroup.toNumber();
      voters[i]._boothAddr = votersBoothAddr;

      var booth = await VotingBoothC.at(voters[i].boothAddr);

      var receipt = await booth.submitVotersPK(voters[i].pK_pair, {from: voters[i].address});
      console.log(`\t \\/== Gas used in submitVotersPK by voter[${i}]:`, receipt.receipt.gasUsed);
      gasUsedSubmitPK += receipt.receipt.gasUsed;

      // get voters ID within group
      var votersId = await booth.votersPKidx.call(voters[i].address);
      voters[i]._id = votersId.toNumber();
    }
    console.log(`\t \\/== Average gas used in submitVotersPK by voter:`, gasUsedSubmitPK / voters.length);

    computeMpcKeys(auth, voters);

    // correctness of MPC keys computed by voters
    for(let i = 0; i < auth.votingGroupsCnt; i++) {
      let sum = auth.G;
      voters.forEach(v => {
        if(v.group == i) {
          sum = auth.curve.add(sum, auth.curve.multiply(v.mpcKey, v.sK));
        }
      });
      assert.equal(sum.toString(), auth.G.toString());
    }

  }).timeout(0);
  
  it ("Precompute right-side sum arrays for MPC keys", async() => {
    var gasUsedPrecomp = 0;

    for (let i = 0; i < booths.length; i++) {
      var gasUsedPrecompBooth = 0;
      let booth = await VotingBoothC.at(booths[i].address);

      var rightMarkersComputed = false;
      while (!rightMarkersComputed) {
        var receipt = await booth.buildRightMarkers4MPC({ from: authority, gas: 12 * 1000 * 1000 });

        receipt.receipt.logs.forEach( e => {
          if(e.event !== undefined && e.event == "RightMarkersComputed") {
            rightMarkersComputed = true;
          }
        })

        console.log(`\t \\/== Gas used in buildRightMarkers4MPC batch in booth ${i}:`, receipt.receipt.gasUsed);
        gasUsedPrecompBooth += receipt.receipt.gasUsed;
      }
      
      gasUsedPrecomp += gasUsedPrecompBooth;

      console.log(`\t \\/== Gas used in buildRightMarkers4MPC in booth ${i}:`, gasUsedPrecompBooth);
    }
    console.log(`\t \\/== Gas used in buildRightMarkers4MPC:`, gasUsedPrecomp);
  }).timeout(0);

  it("Compute MPC keys", async() => {
    let gasUsedMPC = 0;
    var invModArrs_MPC = null;

    for (let i = 0; i < booths.length; i++) {
      let gasUsedMPCbooth = 0;
      let booth = await VotingBoothC.at(booths[i].address);

      var act_left = [utils.toPaddedHex(auth._G.x, 32), utils.toPaddedHex(auth._G.y, 32), 1];

      for (let j = 0; j < booths[i].cntVoters / config.MPC_BATCH_SIZE; j++) {
        // precompute modular inverse off-chain

        invModArrs_MPC = await booth.modInvCache4MPCBatched.call(j * config.MPC_BATCH_SIZE, act_left, {gas: 125000000});

        act_left = invModArrs_MPC[2];
        // MPC keys computation on-chain
        var receipt = await booth.computeMPCKeys(invModArrs_MPC[1], invModArrs_MPC[0], { from: authority, gas: 12 * 1000 * 1000 });
        gasUsedMPCbooth += receipt.receipt.gasUsed;

        console.log(`\t \\/== Gas used in compute MPC key in booth ${i} batch ${j}:`, receipt.receipt.gasUsed);
      }

      console.log(`\t \\/== Gas used in compute MPC key in booth ${i}:`, gasUsedMPCbooth);

      invModArrs_MPC = null;
      gasUsedMPC += gasUsedMPCbooth;

      let boothMPCpKsCnt = await booth.getCntOfMpcPKs.call();
      assert.equal(booths[i].cntVoters, boothMPCpKsCnt.toNumber());
    }
    console.log(`\t \\/== Gas used in compute MPC key:`, gasUsedMPC);
  }).timeout(0);


  it("Submit votes", async () => {
    fastECc = await FastEC.deployed();

    var gasUsedSubmitVote = 0;
    
    for (let i = 0; i < voters.length; i++) {
      var booth = await VotingBoothC.at(voters[i].boothAddr);

      let args = voters[i].getBlindedVote();

      //console.log("Voter ", i, " group ", voters[i].group, " votes for candidate: ", voters[i].vote);

      // decompose scalars of proof_r
      var decomp = [];
      for (let j = 0; j < config.CANDIDATES_CNT; j++) {
        var tmpItems = await fastECc.decomposeScalar.call(args[3][j], config.NN, config.LAMBDA);
        decomp.push(BigInt(tmpItems[0]));
        decomp.push(BigInt(tmpItems[1]));
      }
      args[3] = utils.BIarrayToHexUnaligned(decomp); // update proof_r in arguments of SC (should be 2x longer)

      // decompose scalars of proof_d
      var decomp = [];
      for (let j = 0; j < config.CANDIDATES_CNT; j++) {
        var tmpItems = await fastECc.decomposeScalar.call(args[0][j], config.NN, config.LAMBDA);
        decomp.push(BigInt(tmpItems[0]));
        decomp.push(BigInt(tmpItems[1]));
      }
 
      args[4] = utils.BIarrayToHexUnaligned(decomp);

      // precompute modular inv off-chain
      var tmpPars = args.slice(1);
      //console.log("tmpPars: ", tmpPars);

      // because of error when converting -0x.. to bignumber
      var res2 = [];
      tmpPars[2].forEach(e => {
        res2.push(W3.utils.toBN(e));
      });
      var res3 = [];
      tmpPars[3].forEach(e => {
        res3.push(W3.utils.toBN(e));
      });

      var invModArrs = await booth.modInvCache4SubmitVote.call(tmpPars[1], res2, res3, tmpPars[4], {from: voters[i].address});

      // submit vote
      var receipt = await booth.submitVote(tmpPars[0], tmpPars[1], res2, res3, tmpPars[4], invModArrs, {from: voters[i].address, gas: 12 * 1000 * 1000});
      console.log(`\t \\/== Gas used in submitVote by voter[${i}]:`, receipt.receipt.gasUsed);
      gasUsedSubmitVote += receipt.receipt.gasUsed;
    }
    console.log(`\t \\/== Average gas used in submitVote by voter:`, gasUsedSubmitVote / voters.length);

    // collect blinded votes for authority
    for (let i = 0; i < voters.length; i++) {
      var booth = await VotingBoothC.at(voters[i].boothAddr);
      var bvote = await booth.getBlindedVote.call(voters[i].id);
      booths.forEach(b => {
        if (b.group == voters[i].group) b._blindedVotes.push(new ec.ModPoint(BigInt(bvote[0]), BigInt(bvote[1])));
      })
    }

    // check correct vote counts
    var votesCnt = 0;
    for (let i = 0; i < auth.votingGroupsCnt; i++) {
      var booth = await VotingBoothC.at(booths[i].address);
      var boothVotesCnt = await booth.getCntOfBlindedVotes.call();

      assert.equal(boothVotesCnt.toNumber(), booths[i].cntVoters);

      votesCnt += boothVotesCnt.toNumber();
    }
    assert.equal(votesCnt, auth._cntVoters);

  }).timeout(0);

  it("Compute sums of blinded votes in booth contracts", async () => {

    let voteSumGasUsed = 0;
    for (let i = 0; i < auth.votingGroupsCnt; i++) {
      let booth = await VotingBoothC.at(booths[i].address);

       // computeBlindedVotesSum batched
      var votesSumComputed = false;
      while (!votesSumComputed) {
        var receipt = await booth.computeBlindedVotesSum({ from: authority, gas: 12 * 1000 * 1000 });

        receipt.receipt.logs.forEach( e => {
          if(e.event !== undefined && e.event == "BlindedVotesSumComputed") {
            votesSumComputed = true;
          }
        })

        console.log(`\t \\/== Gas used in computeBlindedVotesSum batch in booth ${i}:`, receipt.receipt.gasUsed);
        voteSumGasUsed += receipt.receipt.gasUsed;
      }
      
    }

    console.log(`\t \\/== Gas used in computeBlindedVotesSum by authority:`, voteSumGasUsed);

  }).timeout(0);

  it("Compute group tallies", async () => {

    for (let i = 0; i < auth.votingGroupsCnt; i++) {
      for (let j = 0; j < auth.candidates.length; j++) {
        booths[i]._tally.push(0n);
      }
      for(let j = 0; j < voters.length; j++) {
        if (voters[j].group == booths[i].group) {
          booths[i]._tally[voters[j].vote] += 1n;
        }
      }
    }

    for (let i = 0; i < auth.votingGroupsCnt; i++) {
      console.log(`Booth ${i} tally (auth): `, booths[i].tally);
    }

    for (let i = 0; i < auth.votingGroupsCnt; i++) {
      assert.equal(booths[i].sumOfBVotes().toString(), auth.expCandGens(booths[i].tally).toString());
    }

    let compTallyGasUsed = 0;
    for (let i = 0; i < auth.votingGroupsCnt; i++) {
      let booth = await VotingBoothC.at(booths[i].address);

      var decomp = [];
      for (let j = 0; j < config.CANDIDATES_CNT; j++) {
        var tmpItems = await fastECc.decomposeScalar.call(web3.utils.numberToHex(booths[i].tally[j].toString(10)), config.NN, config.LAMBDA);
        decomp.push(BigInt(tmpItems[0]));
        decomp.push(BigInt(tmpItems[1]));
      }

      var invModArrs = await booth.modInvCache4Tally.call(utils.BIarrayToHexUnaligned(decomp), {from: authority});

      var receipt = await booth.computeTally(utils.BIarrayToHexUnaligned(decomp), invModArrs, {from: authority, gas: 12 * 1000 * 1000});
      console.log(`\t \\/== Gas used in computeTally by authority in group ${i}:`, receipt.receipt.gasUsed);
      compTallyGasUsed += receipt.receipt.gasUsed;

      receipt.receipt.logs.forEach( e=> {
        if(e.event !== undefined && e.event == "TallyCompleted") {
          let tally = e.args.tally;
          let numTally = [];
          for (let i = 0; i < config.CANDIDATES_CNT; i++) {
            var comp = (BigInt(tally[2 * i].toString()) + BigInt(tally[2 * i + 1].toString()) * BigInt(config.LAMBDA)) % BigInt(config.NN);
            numTally.push(comp.toString());
          }
          console.log("Booth ", i, " tally (sc): ", numTally);
        }
      })
    }

    console.log(`\t \\/== Gas used in computing tally by authority:`, compTallyGasUsed);
  }).timeout(0);

  it("Main collects tally", async () => {

    var authTally = [];
    for (let i = 0; i < config.CANDIDATES_CNT; i++) {
      authTally.push(0n);
      for (let j = 0; j < auth.votingGroupsCnt; j++) {
        authTally[i] += booths[j].tally[i];
      }
    }
    console.log("Final tally from authority: ", authTally);

    var finTally = await votingc.getFinalTally.call({ from: authority });
    finTallyStr = [];

    // tally stored as decomposed scalars
    for (let i = 0; i < config.CANDIDATES_CNT; i++) {
      var comp = (BigInt(finTally[2 * i].toString()) + BigInt(finTally[2 * i + 1].toString()) * BigInt(config.LAMBDA)) % BigInt(config.NN);
      finTallyStr.push(comp.toString());
    }

    console.log("Final tally from contract: ", finTallyStr);

    assert.equal(authTally.toString(), finTallyStr);
  }).timeout(0);
});



function  createAllVoters(auth, accounts){
  voters = [];
  for (let i = 1; i < auth.cntVoters + 1; i++) {
    var voter = new Voter(auth.G, auth.candidateGens_p, auth.candidates, auth.curve, accounts[i], config.VOTER_DEPOSIT);
    voters.push(voter);
  }
  return voters;
}

function computeMpcKeys(auth, voters) {
  let allPKs;
  for(let i = 0; i < auth.votingGroupsCnt; i++) {
    allPKs = [];
    voters.forEach(v => {
      if(v.group == i) {
        allPKs.push(v.pK);
      }
    });
    voters.forEach(v => {
      if(v.group == i) {
        v.computeMpcPK(allPKs);
      }
    });
  }
}
