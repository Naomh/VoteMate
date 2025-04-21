pragma solidity >=0.4.22 <0.9.0;

import { EC } from "./lib/EC.sol";
import { FastEcMul } from "./lib/FastEcMul.sol";

// Authors: authors of BBB-voting (https://arxiv.org/pdf/2010.09112.pdf), Ivana Stančíková
// VotingCalls - booth functions called off-chain
// definitions of functions delegatecalled from booths
contract VotingCalls {

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


    //// View Functions ////

    function modInvCache4MPCBatched(uint start_idx, uint[3] memory last_left) 
        public
        view
        returns(uint[] memory, uint[] memory, uint[3] memory)
    {
        require(0 != MPC_right_markers.length, "Righ markers has not been built yet.");
        require(start_idx < votersPKs.length, "Start idx must be < than the number of participants.");

        uint arrSize = MPC_batch;
        if(votersPKs.length - start_idx < MPC_batch){
            arrSize = votersPKs.length - start_idx;
        }

        // right_table contains right-side sum for every voter in current batch
        uint[3][] memory right_table = new uint[3][](MPC_batch);


        // build the right table using markers created before
        uint skipOffset = 0;
        if(start_idx + MPC_batch > votersPKs.length) { // skipoffset only applies in the last batch of the case where MPC_batch does not divide ephemeralPKs.length
            skipOffset = (MPC_batch - votersPKs.length % MPC_batch);
        }
        right_table[MPC_batch - skipOffset - 1] = MPC_right_markers[MPC_right_markers.length - start_idx / MPC_batch - 1];

        for (uint j = 1 + skipOffset; j < MPC_batch; j++) {
            uint idx = MPC_batch - j;

            (right_table[idx - 1][0],
            right_table[idx - 1][1],
            right_table[idx - 1][2]
            ) = EC.OVN_addMixed(
                right_table[idx],
                votersPKs[start_idx + idx], A, PP
            );
        }

        uint[] memory modInv1 = new uint[](arrSize);
        uint[] memory modInv2 = new uint[](arrSize);
        uint[3] memory res;
        uint[3] memory act_left = last_left;

        // handle the end bound for the main cycle
        uint end_bound = start_idx + MPC_batch;
        if(end_bound > votersPKs.length) {
            end_bound = votersPKs.length;
        }

        // build cache of modular inverses for the current batch
        for (uint i = start_idx; i < end_bound; i++) {

            if(0 != i){ // accumulate sum of x_j * G, starting by the first voter
                (act_left[0], act_left[1], act_left[2]) = EC.OVN_addMixed(act_left, votersPKs[i - 1], A, PP);
            }

            modInv1[i % MPC_batch] = EC.invMod(right_table[i % MPC_batch][2], PP); // store modInv for substraction

            // Finally, we do substraction (left - right)
            (res[0], res[1], res[2]) = EC.ecSub_J(
                act_left[0], act_left[1], act_left[2],
                right_table[i % MPC_batch][0],
                right_table[i % MPC_batch][1],
                right_table[i % MPC_batch][2],
                PP
            );
            modInv2[i % MPC_batch] = EC.invMod(res[2], PP); // store modInv for final affine transformation
        }
        return (modInv1, modInv2, act_left);
    }

    function modInvCache4SubmitVote(
        uint[] memory proof_B,
        int[] memory proof_r,
        int[] memory proof_d,
        uint[2] memory vote
    ) 
        public
        view
        returns (uint[] memory)
    {
        uint[3][] memory modInv = new uint[3][](candidates.length);

        uint idxVoter = votersPKidx[msg.sender];
        uint[3] memory left;
        uint[6] memory right; // right[3-5] is another tmp variable (since stack deep occurs; allowing only 16 local vars and func params)

        for (uint l = 0; l < candidates.length; l++) {

            ///////////////////////////////////
            // 1) g * {r_l} - X * {d_l} == a_l
            //    where X := g * x_i    (ephemeral PK)
            (left[0], left[1], left[2]) = FastEcMul.ecSimMul(
                [proof_r[2 * l], proof_r[2 * l + 1], -proof_d[2 * l], -proof_d[2 * l + 1]],
                [G[0], G[1], 1, votersPKs[idxVoter][0], votersPKs[idxVoter][1], 1],
                A, Beta, PP
            );
            modInv[l][0] = EC.invMod(left[2], PP); // store modInv for 1st affine transformation

            ///////////////////////////////////
            // 2) h * {r_l} + d_l * f_l == b_l + d_l * B_l
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
            modInv[l][1] = EC.invMod(left[2], PP); // store modInv for 2nd affine transformation
            modInv[l][2] = EC.invMod(right[2], PP); // store modInv for 3rd affine transformation
        }  

        // this ugly code is required due to stack deep error that does not allow defining local vars earlier (anyway it is just call-based method)
        uint[] memory ret1 = new uint[](candidates.length * 3);
        for (uint i = 0; i < candidates.length; i++) {
            ret1[i * 3] = modInv[i][0];
            ret1[i * 3 + 1] = modInv[i][1];
            ret1[i * 3 + 2] = modInv[i][2];
        }
        return ret1;
    }

    function modInvCache4Tally(int[] memory c_decom) public view returns (uint[2] memory) {

        // Verify that sum of B_i == f_1 * c_1 + f_2 * c_2 * ... * f_k * c_k

        // Compute Sum of B_i (left side)
        uint[3] memory left = [G[0], G[1], 1];
        for (uint i = 0; i < votersPKs.length; i++) {
            if(blindedVotes[i][0] == 0) {
                continue;
            }
            (left[0], left[1], left[2]) = EC.OVN_addMixed(
                [left[0], left[1], left[2]],
                [blindedVotes[i][0], blindedVotes[i][1]],
                A, PP
            );
        }

        // Compute sum of counts * gens (right side)
        uint[3] memory sum = [G[0], G[1], 1];
        uint[3] memory right;

        for (uint l = 0; l < candidateGens.length; l += 2) { // pairwise iteration
            if(l == candidateGens.length - 1) { // in the case of the odd number of candidates, use neutral feature as the second item for multiplication when processing the last candidate
                (right[0], right[1], right[2]) = FastEcMul.ecSimMul(
                    [c_decom[2 * l], c_decom[2 * l + 1], 0, 0], // take two consecutive decomposed scalars (consisting of 4 items)
                    [candidateGens[l][0], candidateGens[l][1], 1, G[0], G[1], 1], // take 2 consecutive candidate gens
                    A, Beta, PP
                );
            } else { // all other iterations
                (right[0], right[1], right[2]) = FastEcMul.ecSimMul(
                    [c_decom[2 * l], c_decom[2 * l + 1], c_decom[2 * l + 2], c_decom[2 * l + 3]], // take two consecutive decomposed scalars (consisting of 4 items)
                    [candidateGens[l][0], candidateGens[l][1], 1, candidateGens[l + 1][0], candidateGens[l + 1][1], 1], // take 2 consecutive candidate gens
                    A, Beta, PP
                );
            }

            (sum[0], sum[1], sum[2]) = EC.jacAdd(
                sum[0], sum[1], sum[2],
                right[0], right[1], right[2],
                PP
            );
        }

        uint[2] memory ret;
        ret[0] = EC.invMod(left[2], PP); // store modInv for 1st affine transformation
        ret[1] = EC.invMod(sum[2], PP); // store modInv for 2nd affine transformation
        return ret;
    }


    function modInvCache4repairVote(
        uint[] memory faultyIdx,
        uint[] memory blindedKeys,
        uint myIdx,
        int[] memory proof_r,
        int[] memory h_decomp
    )
        public
        view
        returns (uint[] memory)
    {
        uint[2][] memory modInv = new uint[2][](faultyIdx.length);

        for (uint f = 0; f < faultyIdx.length; f++) {
            modInv[f] = FT_modInv4Voter(
                votersPKs[myIdx], 
                votersPKs[faultyIdx[f]],
                [blindedKeys[2 * f], blindedKeys[2 * f + 1]],
                [proof_r[2 * f], proof_r[2 * f + 1]],
                [h_decomp[2 * f], h_decomp[2 * f + 1]]
            );
        }

        // this ugly code is required due to stack deep error that does not allow defining local vars earlier (anyway it is just a call-based method)
        uint[] memory ret1 = new uint[](faultyIdx.length * 3);
        for (uint i = 0; i < faultyIdx.length; i++) {
            ret1[i * 2] = modInv[i][0];
            ret1[i * 2 + 1] = modInv[i][1];
        }

        return ret1;
    }

    function FT_modInv4Voter(
        uint[2] storage I,
        uint[2] storage J,
        uint[2] memory blindedKey,
        int[2] memory proof_r, 
        int[2] memory h_decomp // decomposed scalars
    )
        private 
        view
        returns(uint[2] memory)
    {
        uint[3] memory left;
        uint[2] memory ret;

        ///////////////////////////////////
        // 1)   G * r - I * h == m1      // original is G * r == m1 + I * h
        (left[0], left[1], left[2]) = FastEcMul.ecSimMul(
            [proof_r[0], proof_r[1], -h_decomp[0], -h_decomp[1]],
            [G[0], G[1], 1, I[0], I[1], 1],
            A, Beta, PP
        );
        ret[0] =  EC.invMod(left[2], PP); // store modInv for 1st affine transformation

        ///////////////////////////////////
        // 2)  J * r - C * h = m2        // original is J * r = m2 + C * h     (C = blinding key = G * x_i * x_j)
        (left[0], left[1], left[2]) = FastEcMul.ecSimMul(
            [proof_r[0], proof_r[1], -h_decomp[0], -h_decomp[1]],
            [J[0], J[1], 1, blindedKey[0], blindedKey[1], 1],
            A, Beta, PP
        );
        ret[1] =  EC.invMod(left[2], PP); // store modInv for 2nd affine transformation
        return ret;
    }
}