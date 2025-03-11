import Web3, { Address, Contract } from "web3";
import { Web3Service } from "../../services/web3.service";
import { ec as EC, curve } from "elliptic";
import BN from 'bn.js'
import { randomBytes, shaX, xor, xorBNArray, BIarrayToHexUnaligned } from "../../services/utils";
import { DexieService } from "../../services/dexie.service";
import { utils } from "web3-validator";


const mainVotingC = require('../../../assets/contracts/MainVotingC.json');
const votingBoothC = require('../../../assets/contracts/VotingBoothC.json');
const fastECc = require('../../../assets/contracts/FastEcMul.json');


export class Voter{

    private web3SVC!: Web3Service;
    private dexieSVC!: DexieService
    private mainVotingContract!: Contract<typeof mainVotingC.abi>;
    private boothContract!: Contract<typeof votingBoothC.abi>;
    private fastECc!: Contract<typeof fastECc.abi>

    private candidateGens_p!: bigint[]; 
    private voterGroup!: number;
    
    private readonly voterAddress;
    private readonly lambda = BigInt('0x5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72');
    private readonly nn = BigInt('0xFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFFEFFFFFC2F');

    private readonly ec = new EC('secp256k1');
    private sK!: BN;
    private pK!: curve.base.BasePoint;

    private a: curve.base.BasePoint[] = [];
    private b: curve.base.BasePoint[] = [];
    private d: BN[] = [];
    private r: (BN|undefined)[] = [];

    private c!: BN;

    
    constructor(mainVotingAddress: Address, voterAddress:Address, web3SVC: Web3Service, dexieSVC: DexieService){
        this.voterAddress = voterAddress;
        this.web3SVC = web3SVC;
        this.dexieSVC = dexieSVC;
     
        
        
        (async () => {
            this.mainVotingContract = await this.web3SVC.getSmartContract(mainVotingAddress, mainVotingC.abi)   
            this.voterGroup = await this.mainVotingContract.methods['votersGroup'](voterAddress).call();
            
            const boothAddr: Address = await this.mainVotingContract.methods['groupBoothAddr'](this.voterGroup).call();
            this.boothContract = await web3SVC.getSmartContract(boothAddr, votingBoothC.abi);
       
            const election = await this.dexieSVC.getElection(mainVotingAddress);
            if(!election){
                throw new Error('Election record doesn\'t exist')
            }

            this.fastECc = await this.web3SVC.getSmartContract(election.fastECmulAddress, fastECc.abi)

            if(!election.SK){
                this.sK = randomBytes(this.ec.n as BN);
                this.pK = this.ec.g.mul(this.sK)
                election.SK = this.sK.toString('hex')
                dexieSVC.addOrUpdateElectionRecord(election)
            }
            else{
                this.sK = new BN(election.SK, 'hex');
                this.pK = this.ec.g.mul(this.sK)
            }

            //this.computeMPCKeys();
            //this.computeMPCKey([this.sK])
            this.getBlindedVote(1);
        }   
        )();
    }

    public async submitPK(){
        if(!this.boothContract){
            return;
        }

        const pk_x = `0x` + this.pK.getX().toString('hex');
        const pk_y = `0x` + this.pK.getY().toString('hex');

        await this.boothContract?.methods['submitVotersPK']([pk_x, pk_y]).send({from: this.voterAddress})
        return await this.boothContract?.methods['votersPKidx'](this.voterAddress).call()

        
    }

    async computeMPCKey(ephemeralPKs: curve.base.BasePoint[] ): Promise<curve.base.BasePoint> {
        const id = Number(await this.boothContract?.methods['votersPKidx'](this.voterAddress).call());
        let sumLeft = this.ec.g;
        for(let i = 0; i < id + 1; i++){
            sumLeft = sumLeft.add(ephemeralPKs[i])
        }

        let sumRight = this.ec.g;
        for(let i = id+1; i < ephemeralPKs.length; i++){
            sumRight = sumRight!.add(ephemeralPKs[i]);
        }
        
        return sumLeft.add(sumRight.neg());
    }

    async getBlindedVote(candidate: number){
     
        const candidateKey = await this.getCandidateKeys(candidate)
 
        let voterPKs = [];
        const votersCnt = Number(await this.boothContract.methods['getCntOfVoters']().call());
        for(let i = 0; i < votersCnt; i++){
            try{
                const vg_x = new BN(await this.boothContract.methods['votersPKs'](i, 0).call(), 'hex');
                const vg_y = new BN(await this.boothContract.methods['votersPKs'](i, 1).call(), 'hex');
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
            if(i != candidate){
                const r = randomBytes(this.ec.n as BN)
                const d = randomBytes(this.ec.n as BN)


                let a = this.ec.g.mul(r).add(this.pK.mul(d).neg());

                const candKey = await this.getCandidateKeys(i);

                let b = mpcKey.mul(r).add(candKey.mul(d)).add(blindedVote.mul(d).neg());

                this.a.push(a);
                this.b.push(b);
                this.r.push(r);
                this.d.push(d);
            }else{
                this.a.push(this.ec.g.mul(w));
                this.b.push(mpcKey.mul(w));
                this.r.push(undefined);
                this.d.push(new BN(0));
                console.log(mpcKey.mul(w))
            }
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

        this.c = new BN(shaX(inputForHash, 32), 'hex')
        
        const tmpXor = xorBNArray(this.d, 32)
        this.d[candidate] = new BN(xor(this.c.toString('hex', 64), tmpXor), 'hex');
        this.r[candidate] = this.sK.mul(this.d[candidate]).add(w).mod(this.ec.n as BN);
        return[
            this.d.map(item => item.toString(10)),
            this.a.reduce((acc:string[], item) => {
                acc.push(item.getX().toString(10), item.getY().toString(10));
                return acc;
            }, []),
            this.b.reduce((acc: string[], item) => {
                acc.push(item.getX().toString(10), item.getY().toString(10));
                return acc;
            }, []),
            this.r.map(item => item?.toString(10)),
            [],
            [blindedVote.getX().toString(10), blindedVote.getY().toString(10)]
        ]
    }

    async getCandidateKeys(idx: number): Promise<curve.base.BasePoint> {
        const g_x = new BN(await this.boothContract.methods['candidateGens'](idx, 0).call(), 'hex');
        const g_y = new BN(await this.boothContract.methods['candidateGens'](idx, 1).call(), 'hex');
        
        const candKey = this.ec.curve.point(g_x, g_y)
        return candKey;
    }


    async submitVote(candidate: number){
        const args = await this.getBlindedVote(candidate);
        let decomp = [];

        const candidateCnt = Number(await this.mainVotingContract.methods['getCntOfCandidates']().call());
        for(let i = 0; i < candidateCnt; i++){
            
            const tmpItems = await this.fastECc.methods['decomposeScalar'](args[3][i], this.nn, this.lambda).call() as bigint[];
            decomp.push(BigInt(tmpItems[0]));
            decomp.push(BigInt(tmpItems[1]));
        }
        args[3] = BIarrayToHexUnaligned(decomp);

        decomp = [];
        for(let i = 0; i < candidateCnt; i++){
            const tmpItems = await this.fastECc.methods['decomposeScalar'](args[0][i], this.nn, this.lambda).call() as bigint[];
            decomp.push(BigInt(tmpItems[0]));
            decomp.push(BigInt(tmpItems[1]));
        }
 
        args[4] = BIarrayToHexUnaligned(decomp);

        const tmpPars = args.slice(1);
        
        let res2 = tmpPars[2].map(e => Web3.utils.toBigInt(e));
        
        let res3 = tmpPars[3].map(e => Web3.utils.toBigInt(e));
         
        
         const invModArrs = await this.boothContract.methods['modInvCache4SubmitVote'](tmpPars[1], res2, res3, tmpPars[4]).call();
        console.log(invModArrs);
        console.log('dostalo se to až sem');
        await this.sendTransaction(this.boothContract.methods['submitVote'](tmpPars[0], tmpPars[1], res2, res3, tmpPars[4], invModArrs));
        console.log('woohoo')
    }

    computeBlindedKeyForVoter(pk: curve.base.BasePoint){
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

}