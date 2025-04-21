pragma solidity >=0.4.22 <0.9.0;

import { EC } from "./lib/EC.sol";
import { FastEcMul } from "./lib/FastEcMul.sol";

// Authors: authors of BBB-voting (https://arxiv.org/pdf/2010.09112.pdf), Ivana Stančíková
// VotingFunc - booth functions (on-chain)
// definitions of functions delegatecalled from booths
contract VotingFunc {

    string[] public candidates;
    uint[2][] public candidateGens;

    uint votersCnt;
    uint[2][] public votersPKs;
    uint[2][] public MpcPKs;

    uint public sizeHash;

    uint[] public notVotedIdxs;
    uint submittedVotersRepair = 0;

    // compute blinded votes sum batching
    uint blindedVotesCnt = 0;
    uint VS_start = 0;
    uint VS_batch = 1000;
    uint[3] public blindedVotesSum;

    int[] tally; // stored as pairs of decomposed scalars

    // Secp256k1 curve parameters
    uint[2] public G = [0x79BE667EF9DCBBAC55A06295CE870B07029BFCDB2DCE28D959F2815B16F81798, 0x483ADA7726A3C4655DA4FBFC0E1108A8FD17B448A68554199C47D08FFB10D4B8]; // common generator for voters - base points
    uint public NN = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141; // modulus for private keys (i.e., order of G)
    uint public PP = 0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F; // modulus for public keys (i.e., field size)
    uint public A = 0;
    uint public B = 7;
    uint public Lambda = 0x5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72; // a root of the characteristic polynomial of the endomorphism of the curve
    uint public Beta = 0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee; // constant on the curve (endomorphism)

    // State preservation for batching of MPC key computation
    uint public MPC_start = 0; // idx of the voter that is at the begining of batching sliding window
    uint public MPC_batch; // the size of the batch
    uint[3] public MPC_act_left = [G[0], G[1], 1];
    uint[3][] public MPC_right_markers;

    // Batching right side for MPC computation
    uint public RM_start = 1;
    uint public RM_batch;
    uint[3] public RM_act = [G[0], G[1], 1];

    // Mappings
    mapping(address => bool) public votersWithPK; // mapping of voters that submitted eph. keys
    mapping(address => uint) public votersPKidx; // mapping of addresses of voters to index in votersPKs array
    mapping(uint => uint) public lastRepairedIdx; // last faulty index repaired by voter
    mapping(uint => bool) public submittedRepairKeys;
    mapping(uint => uint[2]) public blindedVotes;


    // Called repeatedly,
    // precomputes right-side values for MPC keys computation
    function buildRightMarkers4MPC() public {
        require(RM_start != votersPKs.length, "RMs have already been built.");
        require(votersPKs.length >= MPC_batch, "MPC batch larger than the number of voters.");

        // build the markers in the right table only at the beginning, 
        // while right table would be built always for relevant voters only (using the markers)
    
        uint[3] memory right_tmp = RM_act;
        uint RM_end = RM_start + RM_batch;
        if (RM_end > votersPKs.length) {
            RM_end = votersPKs.length;
        }
        // deal with a special case where votersPKs.length is not divisible by the batch size
        if(RM_start == 1 && 0 != votersPKs.length % MPC_batch) {
            MPC_right_markers.push(right_tmp);
        }

        // continue with additions to compute the values of penultimate voter and so on, 
        // until the 1st voter is reached
        for (uint j = RM_start; j < RM_end; j++) {

            // store marker since it marks the begining of the batch
            if((votersPKs.length % MPC_batch) == (j - 1) % MPC_batch) {
                MPC_right_markers.push(right_tmp);
            }

            // continue in additions to the right item in MPC expression
            (right_tmp[0], right_tmp[1], right_tmp[2]) = EC.OVN_addMixed(
                right_tmp,
                votersPKs[votersPKs.length - j], A, PP
            );
        }

        RM_act = right_tmp;
        RM_start = RM_end;
    }

    // Called in batches,
    // computes MPC keys for all voters,
    // requires precomputed modular inverses
    // inv_mod_mpc1 - inv mod for right side of substraction
    // inv_mod_mpc2 - inv mod for result (mpc key)
    function computeMPCKeys(uint[] memory inv_mod_mpc2, uint[] memory inv_mod_mpc1) public {
        require(
            RM_start == votersPKs.length, 
            "Righ markers have not been built yet."
        );
        require(
            MPC_batch == inv_mod_mpc1.length || votersPKs.length % MPC_batch == inv_mod_mpc1.length,
            "Length of mod inverse cache array 1 is wrong."
        );
        require(
            MPC_batch == inv_mod_mpc2.length || votersPKs.length % MPC_batch == inv_mod_mpc2.length, 
            "Length of mod inverse cache array 2 is wrong."
        );

        uint[3] memory act_left_m = MPC_act_left;
        uint[3][] memory right_table = new uint[3][](MPC_batch);

        // build the right table using markers created before
        uint skipOffset = 0;
        // skipoffset only applies in the last batch of the case where MPC_batch does not divide ephemeralPKs.length
        if(MPC_start + MPC_batch > votersPKs.length){
            skipOffset = (MPC_batch - votersPKs.length % MPC_batch);
        }
        right_table[MPC_batch - skipOffset - 1] = MPC_right_markers[MPC_right_markers.length - MPC_start / MPC_batch - 1];

        for (uint j = 1 + skipOffset; j < MPC_batch; j++) {
            uint idx = MPC_batch - j;

            (right_table[idx - 1][0],
            right_table[idx - 1][1],
            right_table[idx - 1][2]
            ) = EC.OVN_addMixed(
                right_table[idx],
                votersPKs[MPC_start + idx], A, PP
            );
        }

        // handle the end bound for the main cycle
        uint end_bound = MPC_start + MPC_batch;
        if(end_bound > votersPKs.length){
            end_bound = votersPKs.length;
        }

        uint[3] memory res;
        // the main cycle processing the actual batch of voters
        for (uint i = MPC_start; i < end_bound; i++) {

            if(0 != i){ // accumulate sum of x_j * G, starting by the first voter
                (act_left_m[0], act_left_m[1], act_left_m[2]) = EC.OVN_addMixed(act_left_m, votersPKs[i - 1], A, PP);
            }

            // Finally, we do substraction (left - right)
            (res[0], res[1], res[2]) = EC.ecSub_J_optim(
                act_left_m[0], act_left_m[1], act_left_m[2],
                right_table[i % MPC_batch][0],
                right_table[i % MPC_batch][1],
                right_table[i % MPC_batch][2],
                inv_mod_mpc1[i - MPC_start],
                PP
            );
            (res[0], res[1], res[2]) = EC.toAffine3_optim(res[0], res[1], res[2], inv_mod_mpc2[i - MPC_start], PP);

            MpcPKs.push([res[0], res[1]]);

        }
        MPC_act_left = act_left_m; // update state of MPC batch sliding window at storage
        MPC_start = MPC_start + MPC_batch;
    }

    // Called by voter to submit her vote,
    // requires elements of 1-of-k zero-knowledge proof
    // requires modular inverses for values comapred in proof validation
    function submitVote(
        uint[] memory proof_A,
        uint[] memory proof_B,
        int[] memory proof_r,
        int[] memory proof_d,
        uint[2] memory vote,
        uint[] memory mod_invs
    ) 
        public
    {
        require(
            proof_A.length == 2 * candidates.length &&
            proof_B.length == 2 * candidates.length &&
            proof_r.length == 2 * candidates.length &&
            proof_d.length == 2 * candidates.length,
            "Size of proof != numb of candidates."
        );
  
        uint dxor = 0; // xor of d_l paramteres
        for (uint i = 0; i < candidates.length; i++) {
            uint proof_d_full;
            // compute d = d1+d2*LAMBDA (mod n) to ensure consistency as part of later hash verification
            if(proof_d[2 * i + 1] < 0){
                proof_d_full = NN - mulmod(uint(-proof_d[2 * i + 1]), Lambda, NN);
            } else {
                proof_d_full = mulmod(uint(proof_d[2 * i + 1]), Lambda, NN);
            }

            if(proof_d[2 * i] < 0){
                proof_d_full = addmod(NN + uint(-proof_d[2 * i]), proof_d_full, NN);
            } else {
                proof_d_full = addmod(uint(proof_d[2 * i]), proof_d_full, NN);
            }

            dxor = dxor ^ proof_d_full;
        }

        require(areArraysEqual(
            truncate(abi.encodePacked(keccak256(abi.encodePacked(proof_A, proof_B))), sizeHash),
            truncateLeadingZeros(bytes32(dxor), sizeHash)),
            "C does not match XOR of 'd's."
        );
    
        uint idxVoter = votersPKidx[msg.sender];
        uint[3] memory left;
        uint[6] memory right;

        for (uint l = 0; l < candidates.length; l++) {

            ///////////////////////////////////
            // 1) g * {r_l} - X * {d_l} == a_l
            //    where X := g * x_i    (ephemeral PK)
            (left[0], left[1], left[2]) = FastEcMul.ecSimMul(
                [proof_r[2 * l], proof_r[2 * l + 1], -proof_d[2 * l], -proof_d[2 * l + 1]],
                [G[0], G[1], 1, votersPKs[idxVoter][0], votersPKs[idxVoter][1], 1],
                A, Beta, PP
            );
            (left[0], left[1], left[2]) = EC.toAffine3_optim(left[0], left[1], left[2], mod_invs[l * 3], PP);

            require(left[0] == proof_A[2 * l] && left[1] == proof_A[2 * l + 1], "Vote verif. fails 1st condition.");

            ///////////////////////////////////
            // 2) h * {r_l} + d_l * f_l == b_l + d_l * B_l            // (h = g * Y)
            (left[0], left[1], left[2]) = FastEcMul.ecSimMul(
                [proof_r[2 * l], proof_r[2 * l + 1], proof_d[2 * l], proof_d[2 * l + 1]],
                [MpcPKs[idxVoter][0], MpcPKs[idxVoter][1], 1, candidateGens[l][0], candidateGens[l][1], 1],
                A, Beta, PP
            );
            (right[0], right[1], right[2]) = FastEcMul.ecSimMul(
                [proof_d[2 * l], proof_d[2 * l + 1], 0, 0],
                [vote[0], vote[1], 1, G[0], G[1], 1],
                A, Beta, PP
            );
            (right[0], right[1], right[2]) = EC.OVN_addMixed(
                [right[0], right[1], right[2]],
                [proof_B[2 * l], proof_B[2 * l + 1]],
                A, PP
            );

            (left[0], left[1], left[2]) = EC.toAffine3_optim(left[0], left[1], left[2], mod_invs[l * 3 + 1], PP);
            (right[0], right[1], right[2]) = EC.toAffine3_optim(right[0], right[1], right[2], mod_invs[l * 3 + 2], PP);
            require(left[0] == right[0] && left[1] == right[1], "Vote verif. fails 2nd condition.");
        }
    
        // store vote
        blindedVotes[idxVoter] = [vote[0], vote[1]];
        blindedVotesCnt += 1;
    }

    // Called by voter to repair her vote,
    // requires modular inverses for values comapred in proof validation,
    // requires elements of zero-knowledge proof for each key
    function repairBlindedVote(
        uint[] memory mod_invs,
        int[] memory proof_r,
        int[] memory h_decomp,
        uint[] memory proof_m1, 
        uint[] memory proof_m2,  
        uint[] memory blindedKeys, 
        uint[] memory faultyIdx, 
        uint myIdx
    )
        public
    {
        require(votersPKidx[msg.sender] == myIdx, "Idx not a voter.");
        require(blindedVotes[myIdx][0] != 0, "Voter did not vote.");
        require(faultyIdx.length * 2 == blindedKeys.length);
        require (faultyIdx[0] > lastRepairedIdx[myIdx], "Faulty idx invalid.");

        for (uint f = 0; f < faultyIdx.length; f++) {
            require(blindedVotes[faultyIdx[f]][0] == 0, "Voter not faulty.");

            FT_verifyZKP(
                [mod_invs[f * 2], mod_invs[f * 2 + 1]],
                votersPKs[myIdx], votersPKs[faultyIdx[f]],
                [proof_r[2 * f], proof_r[2 * f + 1]],
                [h_decomp[2 * f], h_decomp[2 * f + 1]],
                [proof_m1[2 * f], proof_m1[2 * f + 1]],
                [proof_m2[2 * f], proof_m2[2 * f + 1]],
                [blindedKeys[2 * f], blindedKeys[2 * f + 1]]
            );

            // blinded key has positive sign (it is on the left from my index)
            // => we need to subtract it from blinded vote
            if(faultyIdx[f] < myIdx) {
                (blindedKeys[2 * f], blindedKeys[2 * f + 1]) = EC.ecInv(
                    blindedKeys[2 * f], blindedKeys[2 * f + 1], PP
                );
            }
            // else{} blinded key has negative sign (it is on the right from my index)
            // => we need to add it to blinded vote
            (blindedVotes[myIdx][0], blindedVotes[myIdx][1]) = EC.ecAdd(
                blindedVotes[myIdx][0], blindedVotes[myIdx][1],
                blindedKeys[2 * f], blindedKeys[2 * f + 1],
                A, PP
            );

            if(f > 0 && faultyIdx[f - 1] >= faultyIdx[f]){ // ascended ordering must be preserved
                revert("Order of idxs not asc.");
            }
        }

        lastRepairedIdx[myIdx] = faultyIdx[faultyIdx.length - 1];

        if(lastRepairedIdx[myIdx] == notVotedIdxs[notVotedIdxs.length - 1]) {
            submittedVotersRepair += 1;
            submittedRepairKeys[myIdx] = true;
        }
    }

    function FT_verifyZKP(
        uint[2] memory mod_invs, 
        uint[2] storage I, 
        uint[2] storage J,
        int[2] memory proof_r,
        int[2] memory h_decomp, // decomposed scalars
        uint[2] memory proof_m1, 
        uint[2] memory proof_m2,
        uint[2] memory blindedKey
) 
        private
        view
    {
        uint[3] memory left;

        ///////////////////////////////////
        // 1)   G * r - I * h == m1     // original is G * r == m1 + I * h
        (left[0], left[1], left[2]) = FastEcMul.ecSimMul(
            [proof_r[0], proof_r[1], -h_decomp[0], -h_decomp[1]],
            [G[0], G[1], 1, I[0], I[1], 1],
            A, Beta, PP
        );
        (left[0], left[1], left[2]) = EC.toAffine3_optim(left[0], left[1], left[2], mod_invs[0], PP);
        require(left[0] == proof_m1[0] && left[1] == proof_m1[1], "FT verif. fails 1st condition.");

        ///////////////////////////////////
        // 2)  J * r - C * h = m2       // original is J * r = m2 + C * h     (C = blinding key = G * x_i * x_j)
        (left[0], left[1], left[2]) = FastEcMul.ecSimMul(
            [proof_r[0], proof_r[1], -h_decomp[0], -h_decomp[1]],
            [J[0], J[1], 1, blindedKey[0], blindedKey[1], 1],
            A, Beta, PP
        );
        (left[0], left[1], left[2]) = EC.toAffine3_optim(left[0], left[1], left[2],  mod_invs[1], PP);
        require(left[0] == proof_m2[0] && left[1] == proof_m2[1], "FT verif. fails 2nd condition.");
    }

    // Called repeatedly to compute sum of all blinded votes
    function computeBlindedVotesSum() public {
        uint[3] memory left;
        if (VS_start == 0) {
            left = [G[0], G[1], 1];
        } else {
            left = blindedVotesSum;
        }

        uint VS_end = VS_start + VS_batch;
        if (VS_end > votersPKs.length) VS_end = votersPKs.length;

        for (uint i = VS_start; i < VS_end; i++) {
            if(blindedVotes[i][0] == 0) continue;

            (left[0], left[1], left[2]) = EC.OVN_addMixed(
                [left[0], left[1], left[2]],
                [blindedVotes[i][0], blindedVotes[i][1]],
                A, PP
            );
        }

        blindedVotesSum = left;
        VS_start = VS_end;
    }

    // Verifies tally provided by authority,
    // requires tally (as decomposed scalars) and modular inverses
    function computeTally(int[] memory c_decom, uint[2] memory modinv) public {
        require(candidates.length * 2 == c_decom.length, "Incorrect c_arr len.");

        // Verify that sum of B_i == f_1 * c_1 + f_2 * c_2 * ... * f_k * c_k

        // Compute sum of counts * gens (right side)
        uint[3] memory sum = [G[0], G[1], 1];
        uint[3] memory right;
        for (uint l = 0; l < candidateGens.length; l += 2) { // pairwise iteration
            // in the case of the odd number of candidates, 
            // use neutral feature as the second item for multiplication when processing the last candidate
            if(l == candidateGens.length - 1) {
                (right[0], right[1], right[2]) = FastEcMul.ecSimMul(
                    // take two consecutive decomposed scalars (consisting of 4 items)
                    [c_decom[2 * l], c_decom[2 * l + 1], 0, 0], 
                    // take 2 consecutive candidate gens
                    [candidateGens[l][0], candidateGens[l][1], 1, G[0], G[1], 1], 
                    A, Beta, PP
                );
            } else { // all other iterations
                (right[0], right[1], right[2]) = FastEcMul.ecSimMul(
                    // take two consecutive decomposed scalars (consisting of 4 items)
                    [c_decom[2 * l], c_decom[2 * l + 1], c_decom[2 * l + 2], c_decom[2 * l + 3]], 
                    // take 2 consecutive candidate gens
                    [candidateGens[l][0], candidateGens[l][1], 1, candidateGens[l + 1][0], candidateGens[l + 1][1], 1], 
                    A, Beta, PP
                );

                // 2nd cand in the pair
                tally[2 * l + 2] = c_decom[2 * l + 2];
                tally[2 * l + 3] = c_decom[2 * l + 3];
            }

            // 1st cand in the pair
            tally[2 * l] = c_decom[2 * l];
            tally[2 * l + 1] = c_decom[2 * l + 1];

            (sum[0], sum[1], sum[2]) = EC.jacAdd(
                sum[0], sum[1], sum[2],
                right[0], right[1], right[2],
                PP
            );
        }

        (blindedVotesSum[0], blindedVotesSum[1], blindedVotesSum[2]) = EC.toAffine3_optim(
            blindedVotesSum[0], blindedVotesSum[1], blindedVotesSum[2], modinv[0], PP
        );

        (sum[0], sum[1], sum[2]) = EC.toAffine3_optim(sum[0], sum[1], sum[2], modinv[1], PP);

        require(blindedVotesSum[0] == sum[0] && blindedVotesSum[1] == sum[1], "Incorrect tally values provided.");
    }

    // Helper functions
    function truncate(bytes memory hash, uint size) internal pure returns (bytes memory) {
        bytes memory ret = new bytes(size);
        for(uint i = 0; i < size; i++) {
            ret[i] = hash[i];
        }
        return ret;
    }

    function truncateLeadingZeros(bytes32 arg, uint size) internal pure returns (bytes memory) {
        bytes32 shiftedArg = arg << (256 - (size * 8));
        bytes memory tmp = abi.encodePacked(shiftedArg);
        return truncate(tmp, size);
    }

    function areArraysEqual(bytes memory a, bytes memory b) internal pure returns (bool) {

        if(a.length != b.length) return false;

        for(uint i = 0; i < a.length; i++) {
            if(a[i] != b[i]) return false;
        }
        return true;
    }
}