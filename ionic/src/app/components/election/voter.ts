import Web3, { Address, Contract, Uint256 } from "web3";
import { Web3Service } from "../../services/web3.service";
import { ec as EC, curve } from "elliptic";
import BN from 'bn.js'
import { randomBytes, shaX, xor, xorBNArray, BIarrayToHexUnaligned, addPaddingToHex, toHexString, ECPointsToHex } from "../../services/utils";
import { DexieService } from "../../services/dexie.service";
import { input, signal } from "@angular/core";
import { Subscription } from "rxjs";
import { utils } from "web3-validator";


const mainVotingC = require('../../../assets/contracts/MainVotingC.json');
const votingBoothC = require('../../../assets/contracts/VotingBoothC.json');
const fastECc = require('../../../assets/contracts/FastEcMul.json');


export class Voter{
    public finalTally = signal<number[] | undefined>(undefined);
    public pkSubmitted = signal<boolean>(false);
    public stage = signal<bigint>(BigInt(0));

    private web3SVC!: Web3Service;
    private dexieSVC!: DexieService
    private mainVotingContract!: Contract<typeof mainVotingC.abi>;
    private fastECc!: Contract<typeof fastECc.abi>

    private readonly mainVotingAddress: Address;
    private readonly voterAddress: Address;
    private readonly lambda = BigInt('0x5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72');
    private readonly nn = BigInt('0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEBAAEDCE6AF48A03BBFD25E8CD0364141');

    private readonly ec = new EC('secp256k1');
    private sK!: BN;
    private pK!: curve.base.BasePoint;

    private a: curve.base.BasePoint[] = [];
    private b: curve.base.BasePoint[] = [];
    private d: BN[] = [];
    private r: (BN|undefined)[] = [];

    private c!: string;


    
    constructor(mainVotingAddress: Address, voterAddress:Address, web3SVC: Web3Service, dexieSVC: DexieService){
        
        const user = dexieSVC.user();
        if(!user || !user.wallet){
            throw new Error('User is not set up properly')
        }
     
        const election = dexieSVC.selectedElection();
        if(!election){
            throw new Error('Election record doesn\'t exist')
        }
     
        this.mainVotingAddress = mainVotingAddress
        this.voterAddress = user.wallet;
        this.web3SVC = web3SVC;
        this.dexieSVC = dexieSVC;
    

        
        const init = async () => {
            this.mainVotingContract = await this.web3SVC.getSmartContract(mainVotingAddress, mainVotingC.abi)   

            this.mainVotingContract.events['allEvents']({fromBlock: 0})
            .on('data', (async (event: any) => {
                const stage = Number(event.returnValues['stage']);
                if(stage === 1){
                    this.checkIfPKSubmitted();
                }
                else if(stage === 5){
                    this.getFinalTallies();
                }
                this.stage.set(await web3SVC.getStage(mainVotingAddress));
            }).bind(this));


            this.fastECc = await this.web3SVC.getSmartContract(election.fastECmulAddress, fastECc.abi)

            if(!election.SK){
                election.SK = randomBytes(this.ec.n as BN).toString('hex')
                await dexieSVC.addOrUpdateElectionRecord(election)
            }
                this.sK = new BN(election.SK, 'hex');
                this.pK = this.ec.g.mul(this.sK)

            this.stage.set(await web3SVC.getStage(mainVotingAddress));
            const stage = Number(this.stage())
            if(stage === 1){
                this.checkIfPKSubmitted();
            }
            else if(stage === 5){
                this.getFinalTallies();
            }
            
        }   
        init();
    }

    async submitPK(){
        try{
            const pk_x = `0x` + this.pK.getX().toString('hex');
            const pk_y = `0x` + this.pK.getY().toString('hex');
            
            const votersGroup = await this.mainVotingContract.methods['votersGroup'](this.voterAddress).call();
            const boothAddr: Address = await this.mainVotingContract.methods['groupBoothAddr'](votersGroup).call();
            const boothContract = await this.web3SVC.getSmartContract(boothAddr, votingBoothC.abi);
            
            const method = boothContract?.methods['submitVotersPK']([pk_x, pk_y])
            await this.web3SVC.unlock();
            await this.sendTransaction(method)
            this.dexieSVC.setkeys(mainVotingC, this.sK.toString('hex'));
        }finally{
            this.checkIfPKSubmitted();   
        }
        
    }

    async computeMPCKey(ephemeralPKs: curve.base.BasePoint[] ): Promise<curve.base.BasePoint> {
        const boothContract = await this.getBoothContract();
        const id = Number(await boothContract?.methods['votersPKidx'](this.voterAddress).call());
        let sumLeft = this.ec.g;
        for(let i = 0; i < id; i++){
            sumLeft = sumLeft.add(ephemeralPKs[i])
        }

        let sumRight = this.ec.g;
        for(let i = id + 1; i < ephemeralPKs.length; i++){
            sumRight = sumRight.add(ephemeralPKs[i]);
        }
        
        return sumLeft.add(sumRight.neg());
    }

    async getBlindedVote(candidate: number){
        [this.a, this.b, this.d, this.r] = [[], [], [], []];

        const boothContract = await this.getBoothContract();

        const candidateKey = await this.getCandidateKeys(candidate);
 
        let voterPKs = [];
        const votersCnt = Number(await boothContract.methods['getCntOfVoters']().call());
        for(let i = 0; i < votersCnt; i++){
            try{
                const vg_x = new BN(await boothContract.methods['votersPKs'](i, 0).call(), 10);
                const vg_y = new BN(await boothContract.methods['votersPKs'](i, 1).call(), 10);
                const voterKey = this.ec.curve.point(vg_x, vg_y);
                voterPKs.push(voterKey);
            }catch(e){
                break;
            }
        }
        const mpcKey = await this.computeMPCKey(voterPKs);
     
        const blindedVote = mpcKey.mul(this.sK).add(candidateKey);

        const w = randomBytes(this.ec.n as BN);

        const candidateCnt = Number(await this.mainVotingContract.methods['getCntOfCandidates']().call())
        for(let i = 0; i < candidateCnt; i++){
            let a, b, r, d;
            if(i != candidate){
                r = randomBytes(new BN(this.ec.n as BN))
                d = randomBytes(new BN(this.ec.n as BN))

                a = this.ec.g.mul(r).add(this.pK.mul(d).neg());
                const candKey = await this.getCandidateKeys(i);
                b = mpcKey.mul(r).add(candKey.mul(d)).add(blindedVote.mul(d).neg());

            }else{
                 a = this.ec.g.mul(w);
                 b = mpcKey.mul(w);
                 r = undefined;
                 d = new BN(0);
            }
            this.a.push(a);
            this.b.push(b);
            this.r.push(r);
            this.d.push(d);
        }

        let inputForHash = [];
        for (const a of this.a){
            inputForHash.push(a.getX().toString('hex', 64))
            inputForHash.push(a.getY().toString('hex', 64))
        }

        for (const b of this.b){
            inputForHash.push(b.getX().toString('hex', 64))
            inputForHash.push(b.getY().toString('hex', 64))
        }

        this.c = shaX(inputForHash, 32)

        const tmpXor = xorBNArray(this.d, 32)
        this.d[candidate] = new BN(xor(this.c, tmpXor), 'hex');

        this.r[candidate] =  this.sK.mul(this.d[candidate]).add(w).mod(this.ec!.n as BN);

        return[
            this.d.map(toHexString),
            this.a.reduce((acc:string[], item) => {
                acc.push(toHexString(item.getX()), toHexString(item.getY()));
                return acc;
            }, []),
            this.b.reduce((acc: string[], item) => {
                acc.push(toHexString(item.getX()), toHexString(item.getY()));
                return acc;
            }, []),
            this.r.map( e => e ? toHexString(e) : undefined),
            [],
            [toHexString(blindedVote.getX()), toHexString(blindedVote.getY())]
        ]
    }

    async getCandidateKeys(idx: number): Promise<curve.base.BasePoint> {
        const boothContract = await this.getBoothContract();
        const g_x = new BN(await boothContract.methods['candidateGens'](idx, 0).call(), 10);
        const g_y = new BN(await boothContract.methods['candidateGens'](idx, 1).call(), 10);
        const candKey = this.ec.curve.point(g_x, g_y)
        return candKey;
    }


    async submitVote(candidate: number){
        const args = await this.getBlindedVote(candidate);
        
        const candidateCnt = Number(await this.mainVotingContract.methods['getCntOfCandidates']().call());
        
        let decomp = [];
        for(let i = 0; i < candidateCnt; i++){
            const tmpItems = await this.fastECc.methods['decomposeScalar'](args[3][i], toHexString(this.ec.n as BN), toHexString(this.lambda)).call() as bigint[];
            decomp.push(BigInt(tmpItems[0]));
            decomp.push(BigInt(tmpItems[1]));
        }

        args[3] = BIarrayToHexUnaligned(decomp);

        decomp = [];
        for(let i = 0; i < candidateCnt; i++){
            const tmpItems = await this.fastECc.methods['decomposeScalar'](args[0][i], toHexString(this.ec.n as BN), toHexString(this.lambda)).call() as bigint[];
            decomp.push(BigInt(tmpItems[0]));
            decomp.push(BigInt(tmpItems[1]));
        }
 
        args[4] =  BIarrayToHexUnaligned(decomp);


        const tmpPars = args.slice(1);
        const tmpPars1 = tmpPars[1];
        const res2 = tmpPars[2];
        const res3 = tmpPars[3];

        const boothContract = await this.getBoothContract();

        const invModArrs = await boothContract.methods['modInvCache4SubmitVote'](tmpPars1, res2, res3, tmpPars[4]).call({from: this.voterAddress});

        await this.sendTransaction(boothContract.methods['submitVote'](tmpPars[0], tmpPars1, res2, res3, tmpPars[4], invModArrs));


    }

    public async getFinalTallies(){
        const finalTally = await this.mainVotingContract.methods['getFinalTally']().call({from: this.voterAddress}) as BigInt[];
        const candidatesCnt = Number(await this.mainVotingContract.methods['getCntOfCandidates']().call());

        let result = [];
        for (let i = 0; i < candidatesCnt; i++) {
            var comp = (BigInt(finalTally[2 * i].toString()) + BigInt(finalTally[2 * i + 1].toString()) * BigInt(this.lambda)) % BigInt(this.nn);
            result.push(Number(comp))
          }
        this.finalTally.set(result);
        return result;
    }

    public async repairFaultyVotes() {
        const boothContract = await this.getBoothContract();
        const pkCnt = await boothContract.methods['getCntOfSubmitedPKs']().call();
        const voted = await boothContract.methods['getCntOfBlindedVotes']().call();

        const faultyVotesCnt = Number(pkCnt) - Number(voted);

        let faultyIdxs = [];
        let faultyPks = [];
        let repairKeys = [];

        // Retrieve faulty public keys and compute blinded keys
        for (let i = 0; i < faultyVotesCnt; i++) {
            const faultyPkIdx = await boothContract.methods['notVotedIdxs'](i).call();
            const faultyPk_x = new BN(await boothContract.methods['votersPKs'](faultyPkIdx, 0).call());
            const faultyPk_y = new BN(await boothContract.methods['votersPKs'](faultyPkIdx, 1).call());
            const faultyPk = this.ec.curve.point(faultyPk_x, faultyPk_y);
            const bvote = this.computeBlindedKeyForVoter(faultyPk);

            faultyIdxs.push(faultyPkIdx);
            faultyPks.push(faultyPk);
            repairKeys.push(...bvote);
        }

        // Generate ZK proofs for faulty votes
        let args = this.computeZKproofs4FT(faultyVotesCnt, faultyPks);

        // Decompose scalars for ZK proofs
        let decomp = [];
        for (let i = 0; i < faultyVotesCnt; i++) {
            const tmpItems = await this.fastECc.methods['decomposeScalar'](args[0][i], toHexString(this.ec.n as BN), toHexString(this.lambda)).call() as bigint[];
            decomp.push(BigInt(tmpItems[0]));
            decomp.push(BigInt(tmpItems[1]));
        }
        args[0] = BIarrayToHexUnaligned(decomp);

        decomp = [];
        for (let i = 0; i < faultyVotesCnt; i++) {
            const tmpItems = await this.fastECc.methods['decomposeScalar'](args[1][i], toHexString(this.ec.n as BN), toHexString(this.lambda)).call() as bigint[];
            decomp.push(BigInt(tmpItems[0]));
            decomp.push(BigInt(tmpItems[1]));
        }
        args[1] = BIarrayToHexUnaligned(decomp);

        const res0 = args[0];
        const res1 = args[1];
        const id = await boothContract.methods['votersPKidx'](this.voterAddress).call();

        // Precompute modular inverses for the repair transaction
        const invModArrs = await boothContract.methods['modInvCache4repairVote'](
            faultyIdxs.map(e => Number(e)),
            repairKeys,
            Number(id),
            res0,
            res1
        ).call({ from: this.voterAddress }) as bigint[];

        // Batch repair transactions
        const maxAtOnce = 7;
        for (let i = 0; i < faultyVotesCnt; i += maxAtOnce) {
            let end = Math.min(i + maxAtOnce, faultyVotesCnt);

            const method = boothContract.methods['repairBlindedVote'](
                BIarrayToHexUnaligned(invModArrs.slice(2 * i, 2 * end)),
                res0.slice(2 * i, 2 * end),
                res1.slice(2 * i, 2 * end),
                args[2].slice(2 * i, 2 * end),
                args[3].slice(2 * i, 2 * end),
                repairKeys.slice(2 * i, 2 * end),
                faultyIdxs.slice(i, end),
                id
            );
            await this.sendTransaction(method);
        }
    }

    private computeZKproofs4FT(faultyVoterCount: number, faultyPks: curve.base.BasePoint[]){
        let proof_r = [];
        let proof_m1 = [];
        let proof_m2 = [];
        let hashes = [];

        for(let i = 0; i < faultyVoterCount; i++){

            const B = faultyPks[i];
            const w = randomBytes(this.ec.n as BN);
            const m1 = this.ec.g.mul(w);
            const m2 = B.mul(w);

            proof_m1.push(m1);
            proof_m2.push(m2);


            let inputForHash = [];
            inputForHash.push(this.pK.getX().toString('hex', 64), this.pK.getY().toString('hex', 64));
            inputForHash.push(B.getX().toString('hex', 64), B.getY().toString('hex', 64));
            inputForHash.push(m1.getX().toString('hex', 64), m1.getY().toString('hex', 64));
            inputForHash.push(m2.getX().toString('hex', 64), m2.getY().toString('hex', 64));
               
            const c = new BN(shaX(inputForHash.map(toHexString), 32).slice(2), 'hex');
            hashes.push(BigInt(c.toString(10)));

            const cx = this.sK.mul(c).mod(this.ec.n as BN);
            const r = cx.add(w).mod(this.ec.n as BN);
            proof_r.push(BigInt(r.toString(10)));
        }

        return [
            proof_r.map(toHexString),
            hashes.map(toHexString),
            proof_m1.reduce(ECPointsToHex, []),
            proof_m2.reduce(ECPointsToHex, []),
        ]
    }

    private computeBlindedKeyForVoter(pk: curve.base.BasePoint){
        const res = pk.mul(this.sK);
        return ['0x' + res.getX().toString('hex', 64), '0x' + res.getY().toString('hex', 64)];
    }

    private async sendTransaction(method: any){
        try{
            const gas = await method.estimateGas({from: this.voterAddress});
            return await method.send({from: this.voterAddress, gas});
        }catch(e: unknown){
            console.error(e);
            throw new Error('Transaction failed');
        }
    }

    private async getBoothContract(){
        if(!this.mainVotingContract){
            throw new Error('Main voting contract is not set')
        }
        const votersGroup = await this.mainVotingContract.methods['votersGroup'](this.voterAddress).call();
        const boothAddr: Address = await this.mainVotingContract.methods['groupBoothAddr'](votersGroup).call();
        return this.web3SVC.getSmartContract(boothAddr, votingBoothC.abi);
    }

    private async checkIfPKSubmitted(){
        const boothContract = await this.getBoothContract();
        const pkSubmitted = await boothContract.methods['votersWithPK'](this.voterAddress).call() as boolean;
        this.pkSubmitted.set(pkSubmitted);
    }

    public async refresh(){
        this.stage.set(await this.web3SVC.getStage(this.mainVotingAddress));
    }

}