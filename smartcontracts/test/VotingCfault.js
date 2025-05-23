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
var _ = require('underscore');
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
  const enroll_batch = 200;
  const split_batch = 200;

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
  });

  it("Enroll voters", async () => {
    voters = createAllVoters(auth, accounts);
    var candCnt = await votingc.getCntOfCandidates.call();
    assert.equal(candCnt, auth.candidates.length);
    var votersCnt = await votingc.getCntOfEligibleVoters.call();
    assert.equal(votersCnt, 0);

    var enroll_addrs = auth.getVoterAddrs(accounts);
    var gasUsedEnroll = 0;
    for (let i = 0; i < auth.cntVoters; i += enroll_batch) {
      let cnt = (i + enroll_batch - 1) < auth.cntVoters ? enroll_batch : (auth.cntVoters % enroll_batch); 
      let batch = enroll_addrs.slice(i, i + cnt);
      var receipt = await votingc.enrollVoters(batch, { from: authority });

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
      var receipt = await votingc.splitGroups(i, split_batch, auth.votingGroupsCnt, { from: authority });
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
      var receipt = await votingc.deployBooths(i, deploy_batch, votingfunc.address, votingcalls.address, { from: authority });
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
      booths[i].setVotersCnt(boothVotersCnt);
      booths[i].setFaulty(auth.faultyCnt);

      console.log("Booth ", i, " voter count: ", boothVotersCnt.toNumber());

      assert(boothVotersCnt.toNumber() >= minGroupSize);
    }
  }).timeout(0);

  it("Submit PKs by voters", async () => {
    for(let i = 0; i < voters.length; i++) {

      // for each voter, find booth(addr) voter belongs to
      let votersGroup = await votingc.votersGroup.call(voters[i].address)
      let votersBoothAddr = await votingc.groupBoothAddr.call(votersGroup);
 
      voters[i]._group = votersGroup.toNumber();
      voters[i]._boothAddr = votersBoothAddr;

      for (let j = 0; j < auth.votingGroupsCnt; j++) {
        if (booths[j].address == votersBoothAddr) {
          voters[i]._booth = booths[j];
        }
      }

      //var booth = await VotingBoothC.at(voters[i].boothAddr);
      var booth = await VotingBoothC.at(voters[i].booth.address);

      var receipt = await booth.submitVotersPK(voters[i].pK_pair, {from: voters[i].address});
      console.log(`\t \\/== Gas used in submitVotersPK by voter[${i}]:`, receipt.receipt.gasUsed);

      // get voters ID within group/booth
      var votersId = await booth.votersPKidx.call(voters[i].address);
      voters[i]._id = votersId.toNumber();

      // set voters global idx in booth (to later get PKs with booth idx only)
      voters[i].booth._votersAuthIdx[votersId.toNumber()] = i;
    }

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
        var receipt = await booth.buildRightMarkers4MPC({ from: authority });

        receipt.receipt.logs.forEach( e => {
          if(e.event !== undefined && e.event == "RightMarkersComputed") {
            rightMarkersComputed = true;
          }
        })

        //console.log(`\t \\/== Gas used in buildRightMarkers4MPC batch in booth ${i}:`, receipt.receipt.gasUsed);
        gasUsedPrecompBooth += receipt.receipt.gasUsed;
      }
      
      gasUsedPrecomp += gasUsedPrecompBooth;

      console.log(`\t \\/== Gas used in buildRightMarkers4MPC in booth ${i}:`, gasUsedPrecompBooth);

      var markersCnt = await booth.getCntOfMarkersMPC.call()
      assert.equal(markersCnt, Math.ceil(booths[i].cntVoters / config.MPC_BATCH_SIZE));
    }

    console.log(`\t \\/== Gas used in buildRightMarkers4MPC:`, gasUsedPrecomp);
  }).timeout(0);

  it("Compute MPC keys", async() => {
    let gasUsedMPC = 0;
    var invModArrs_MPC = null;

    for (let i = 0; i < booths.length; i++) {
      let booth = await VotingBoothC.at(booths[i].address);

      var act_left = [utils.toPaddedHex(auth._G.x, 32), utils.toPaddedHex(auth._G.y, 32), 1];
      for (let j = 0; j < booths[i].cntVoters / config.MPC_BATCH_SIZE; j++) {
        // precompute modular inverse off-chain
        invModArrs_MPC = await booth.modInvCache4MPCBatched.call(j * config.MPC_BATCH_SIZE, act_left);

        act_left = invModArrs_MPC[2];

        // MPC keys computation on-chain
        var receipt = await booth.computeMPCKeys(invModArrs_MPC[1], invModArrs_MPC[0], { from: authority});
        gasUsedMPC += receipt.receipt.gasUsed;

        invModArrs_MPC = null;
      }

      let boothMPCpKsCnt = await booth.getCntOfMpcPKs.call();
      assert.equal(booths[i].cntVoters, boothMPCpKsCnt.toNumber());
    }
    console.log(`\t \\/== Gas used in compute MPC key:`, gasUsedMPC);
  }).timeout(0);

  it("Submit votes", async () => {
    fastECc = await FastEC.deployed();
    
    for (let i = 0; i < voters.length; i++) {
      if (_.contains(voters[i].booth.faultyVotersIdxs, voters[i].id)) {
        voters[i]._isFaulty = true;
        continue;
      }

      var booth = await VotingBoothC.at(voters[i].booth.address);

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
      var receipt = await booth.submitVote(tmpPars[0], tmpPars[1], res2, res3, tmpPars[4], invModArrs, {from: voters[i].address});
      console.log(`\t \\/== Gas used in submitVote by voter[${i}]:`, receipt.receipt.gasUsed);
    }

    // collect blinded votes for authority
    for (let i = 0; i < voters.length; i++) {
      if (voters[i].isFaulty) {
        continue;
      } 

      var booth = await VotingBoothC.at(voters[i].booth.address);
      var bvote = await booth.getBlindedVote.call(voters[i].id);
      
      voters[i].booth._blindedVotes.push(new ec.ModPoint(BigInt(bvote[0]), BigInt(bvote[1])));
    }

    // check correct vote counts
    var votesCnt = 0;
    for (let i = 0; i < auth.votingGroupsCnt; i++) {
      var booth = await VotingBoothC.at(booths[i].address);
      var boothVotesCnt = await booth.getCntOfBlindedVotes.call();

      assert.equal(boothVotesCnt.toNumber(), (booths[i].cntVoters - booths[i].faultyVotersCnt));

      votesCnt += boothVotesCnt.toNumber();
    }
    assert.equal(votesCnt, (auth.cntVoters - (auth.votingGroupsCnt * auth.faultyCnt)));

  }).timeout(0);

  it("Prepare to repair votes", async () => {
    for (let i = 0; i < booths.length; i++) {
      let booth = await VotingBoothC.at(booths[i].address);

      var receipt = await booth.changeStageToFaultRepair({from: authority});
      console.log(`\t \\/== Gas used in changeStageToFaultRepair:`, receipt.receipt.gasUsed);

      let nonVotedIDXes_fromSC = [];
      receipt.receipt.logs.forEach(e => {
        if(e.event !== undefined && e.event == "MissingVotesEvent"){
          for (let i = 0; i < e.args.notVotedIdxs.length; i++) {          
            nonVotedIDXes_fromSC.push(Number(e.args.notVotedIdxs[i]));          
          }
        }
      });

      assert.equal(nonVotedIDXes_fromSC.length, booths[i].faultyVotersCnt);
      assert(_.difference(booths[i].faultyVotersIdxs, nonVotedIDXes_fromSC).length == 0);
    }
  }).timeout(0);

  it("Repair votes of non-faulty participants", async () => {

    let gasOfRepairs = 0;

    for (let i = 0; i < voters.length; i++) {
      if (voters[i].isFaulty){
        continue;
      }

      var booth = await VotingBoothC.at(voters[i].booth.address);

      var repairKeys = [];
      for (let j = 0; j < voters[i].booth.faultyVotersCnt; j++) {
        const boothIdx = voters[i].booth.faultyVotersIdxs[j];
        const f = voters[i].booth.votersAuthIdx[boothIdx];

        repairKeys.push(...voters[i].computeBlindKeyForVoter(voters[f].pK));
      }
      let args = voters[i].computeZKproofs4FT(voters[i].booth.faultyVotersIdxs, voters);

      // decompose scalars of proof_r to two parts
      var decomp = [];
      for (let j = 0; j < voters[i].booth.faultyVotersCnt; j++) {
        var tmpItems = await fastECc.decomposeScalar.call(args[0][j], config.NN, config.LAMBDA);
        console.log('tempajtems', tmpItems);
        decomp.push(BigInt(tmpItems[0]));
        decomp.push(BigInt(tmpItems[1]));
      }
      args[0] = utils.BIarrayToHexUnaligned(decomp); // update proof_r in arguments of SC (should be 2x longer)

      // decompose scalars of hashes to two parts
      var decomp = [];
      for (let j = 0; j < voters[i].booth.faultyVotersCnt; j++) {
        var tmpItems = await fastECc.decomposeScalar.call(args[1][j], config.NN, config.LAMBDA);
        decomp.push(BigInt(tmpItems[0]));
        decomp.push(BigInt(tmpItems[1]));
      }
      args[1] = utils.BIarrayToHexUnaligned(decomp); // update hashes in arguments of SC (should be 2x longer)

      // because of an error when converting -0x.. to bignumber
      var res0 = [];
      args[0].forEach(e => {
        res0.push(W3.utils.toBN(e)); 
      });
      console.log('res nula', res0);
      var res1 = [];
      args[1].forEach(e => {
        res1.push(W3.utils.toBN(e));
      });

      var invModArrs = await booth.modInvCache4repairVote.call(
        voters[i].booth.faultyVotersIdxs,
        repairKeys,
        voters[i].id,
        res0, res1,// ...(args.slice(0, 2)),
        {from: voters[i].address}
      );
      
      var gasUsedVoter = 0;
      var receipt;
      let maxAtOnce = 7;
      for (let l = 0; l < voters[i].booth.faultyVotersIdxs.length; l+=maxAtOnce) {
        let end = l + maxAtOnce;
        if (end > voters[i].booth.faultyVotersIdxs.length) {
          end = voters[i].booth.faultyVotersIdxs.length;
        }

        var receipt = await booth.repairBlindedVote(
          invModArrs.slice(2*l, 2*end),
          res0.slice(2*l, 2*end),
          res1.slice(2*l, 2*end),
          args[2].slice(2*l, 2*end),
          args[3].slice(2*l, 2*end),
          repairKeys.slice(2*l, 2*end),
          voters[i].booth.faultyVotersIdxs.slice(l, end),
          voters[i].id,
          {from: voters[i].address}
        );

        gasUsedVoter += receipt.receipt.gasUsed;
        console.log(`\t \\/== Gas used in repairBlindedVote, voter ${i}, faulty idxs ${l}-${end-1}:`, receipt.receipt.gasUsed);

        receipt.receipt.logs.forEach(e => {
          if(e.event !== undefined && e.event == "RepairedBVoteEvent"){
            console.log("\t==> repaired bvote from SC = ", utils.BIarrayToHexUnaligned(e.args.blindedVote));            
          }
        }); 
      }

      console.log(`\t \\/== Gas used in repairBlindedVote by voter ${i}:`, gasUsedVoter);
      gasOfRepairs += gasUsedVoter;

      var repairedBlindedVote = voters[i].repairBlindedVote(voters[i].booth.faultyVotersIdxs, voters);
      console.log(`Repaired blinded vote of voter[${i}] = `, utils.ECPointsArrayToHex([repairedBlindedVote], voters[i].sizeP));
    }

    console.log(`\t \\/== Gas used in vote repairs: `, gasOfRepairs);
    console.log(`\t \\/== Average gas used per vote repair: `, gasOfRepairs / (config.VOTERS_CNT - config.GROUPS_CNT * config.FAULTY_VOTERS));
  }).timeout(0);

  it("Compute sums of blinded votes in booth contracts", async () => {

    let voteSumGasUsed = 0;
    for (let i = 0; i < auth.votingGroupsCnt; i++) {
      let booth = await VotingBoothC.at(booths[i].address);

       // computeBlindedVotesSum batched
      var votesSumComputed = false;
      while (!votesSumComputed) {
        var receipt = await booth.computeBlindedVotesSum({ from: authority});

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
    }
    for(let i = 0; i < voters.length; i++) {
      if (voters[i].isFaulty) {
        continue;
      }
      let cand = voters[i].vote;
      voters[i].booth._tally[cand] += 1n;
    }

    for (let i = 0; i < auth.votingGroupsCnt; i++) {
      console.log(`Booth ${i} tally (auth): `, booths[i].tally);
    }

    // collect repaired blinded votes
    for (let i = 0; i < auth.votingGroupsCnt; i++) {
      booths[i]._blindedVotes = [];
    }
    for (let i = 0; i < voters.length; i++) {
      if (voters[i].isFaulty) {
        continue;
      }
      var bvote = voters[i].bvote;
      voters[i].booth._blindedVotes.push(bvote);
    }

    for (let i = 0; i < auth.votingGroupsCnt; i++) {
      assert.equal(booths[i].sumOfBVotes().toString(), auth.expCandGens(booths[i].tally).toString());
    }

    let gasUsed = 0;
    for (let i = 0; i < auth.votingGroupsCnt; i++) {
      let booth = await VotingBoothC.at(booths[i].address);

      var decomp = [];
      console.log('---------------------');
      for (let j = 0; j < config.CANDIDATES_CNT; j++) {
        console.log(web3.utils.numberToHex(booths[i]._tally[j].toString(10)));
        var tmpItems = await fastECc.decomposeScalar.call(web3.utils.numberToHex(booths[i]._tally[j].toString(10)), config.NN, config.LAMBDA);
        decomp.push(BigInt(tmpItems[0]));
        decomp.push(BigInt(tmpItems[1]));
      }
      console.log('---------------------')

      var invModArrs = await booth.modInvCache4Tally.call(utils.BIarrayToHexUnaligned(decomp), {from: authority});

      var receipt = await booth.computeTally(utils.BIarrayToHexUnaligned(decomp), invModArrs, {from: authority});
      console.log(`\t \\/== Gas used in computeTally by authority in group ${i}:`, receipt.receipt.gasUsed);
      gasUsed += receipt.receipt.gasUsed;

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
    console.log(`\t \\/== Gas used in computing tally  by authority:`, gasUsed);
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
    
    for (let i = 0; i < config.CANDIDATES_CNT; i++) {
      var comp = (BigInt(finTally[2 * i].toString()) + BigInt(finTally[2 * i + 1].toString()) * BigInt(config.LAMBDA)) % BigInt(config.NN);
      finTallyStr.push(comp.toString());
    }

    console.log("Final tally from contract: ", finTallyStr);

    assert.equal(authTally.toString(), finTallyStr);
  }).timeout(0);
});



function createAllVoters(auth, accounts){
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
