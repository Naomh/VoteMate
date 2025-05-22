import { Component, inject, OnInit, Signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Web3Service } from '../../services/web3.service';
import { DexieService } from '../../services/dexie.service';
import { HttpService } from '../../services/http.service';
import { Address, Contract, ERR_PARAM } from 'web3';
import { ICandidate, IElection } from '../../UI/election-list/election.interface';
import { AsyncPipe, CommonModule, DatePipe } from '@angular/common';
import { Voter } from './voter';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent, ButtonHandler } from "../../UI/button/button.component";
import { ESort } from '../../interfaces/sort.enum';
import { ElectionStage, ElectionstagePipe } from '../../pipes/electionstage.pipe';
import { TallyChartComponent } from '../../UI/tally-chart/tally-chart.component';

const MainVotingC = require('../../../assets/contracts/MainVotingC.json');
const VotingBoothC = require('../../../assets/contracts/VotingBoothC.json');

@Component({
    selector: 'app-election',
    standalone: true,
    imports: [RouterModule, ReactiveFormsModule, CommonModule, DatePipe, ButtonComponent, ElectionstagePipe, TallyChartComponent, AsyncPipe],
    templateUrl: './election.component.html',
    styleUrl: './election.component.scss'
})
export class ElectionComponent extends ButtonHandler implements OnInit{

  private web3SVC = inject(Web3Service);
  private dexieSVC = inject(DexieService);
  private httpSVC = inject(HttpService);

  private router = inject(Router)
  private route = inject(ActivatedRoute)

  private address!: string;
  private user = this.dexieSVC.user();
  private voter!: Voter;

  private sort: ESort = ESort.none;

  protected contract!:Contract<any>;
  protected election!: IElection | undefined;
  protected FilteredCandidates!: ICandidate[];
  protected isEligible!: boolean;
  protected isAdmin = this.dexieSVC.isAdmin;
  protected electionStage!: bigint;

  public finalTally!: Signal<number[] | undefined>;
  public PkSubmitted!: Signal<boolean>;
  public stage!: Signal<bigint>;


  protected form = new FormGroup({
    selectedCandidate: new FormControl('', Validators.required), 
  });


  async ngOnInit(): Promise<void> {
    const id = this.route.snapshot.paramMap.get('id');

    if(!id || !this.user?.wallet){
      this.router.navigate(['/list']);
      throw new Error('user not found or election id not found');
    }

    await this.dexieSVC.selectElection(id);

    this.address = this.dexieSVC.selectedElection()!.mainVotingAddress;
    this.voter = new Voter(this.address, this.user.wallet, this.web3SVC, this.dexieSVC);
    
    this.finalTally = this.voter.finalTally;
    this.PkSubmitted = this.voter.pkSubmitted;

    this.isEligible = await this.web3SVC.isVoterEligible(this.address, this.user.wallet);
    this.electionStage = await this.web3SVC.getStage(this.address);
    
    if(Number(this.electionStage) !== ElectionStage.voting && !this.isEligible){
      this.form.disable();
    }

    this.contract = await this.web3SVC.getSmartContract(this.address, MainVotingC.abi);
    if(!this.contract){
      this.router.navigate(['/list']);
      throw new Error('smart the smat contract is unreachable');
    }


    this.election = this.dexieSVC.selectedElection();
    if(!this.election){
      this.router.navigate(['/list']);
      throw new Error('election doesn\'t exist');
    }
    this.FilteredCandidates = this.election.candidates;
  }

  async splitGroups(){
    if(!this.address){
      return;
    }
    await this.httpSVC.splitGroups(this.address);
  }

  finishSetupPhase() {
    this.httpSVC.finishSetupPhase(this.address);
  }
    

  async logStats(){
    console.log(await this.contract?.methods["stage"]().call());
    console.log(await this.contract?.methods['isVoterEligible'](this.dexieSVC.user()?.wallet).call());
    console.log(await this.contract?.methods['getCntOfEligibleVoters']().call())
    const boothAddr:string|undefined = await this.contract?.methods['groupBoothAddr'](0).call();
    console.log(boothAddr)
    if(!boothAddr){
      return;
    }
    const boothContract = await this.web3SVC.getSmartContract(boothAddr,  VotingBoothC.abi);
    console.log(await boothContract.methods['getCntOfVoters']().call())
    console.log(await boothContract.methods['getBoothStage']().call())
  }

  async submitPK(){
      await this.voter.submitPK();
  }

  async precomputeMPCkeys(){
    await this.httpSVC.precomputeMPCKeys(this.address);
  }

  async computeMPCkeys(){
    await this.httpSVC.computeMPCKeys(this.address);
  }

  async computeBlindedVotesSum(){
    await this.httpSVC.computeBlindedVotesSum(this.address, this.election!.ECaddress);
  }
  
  async computeGroupTallies(){
    await this.httpSVC.computeGroupTallies(this.address, this.election!.fastECmulAddress, this.election!.ECaddress);
  }

  async vote(){
    if (!this.form.valid) {
      throw new Error('Select your candidate.')
    }
    const candidate = parseInt(this.form.value.selectedCandidate as string, 10);

    await this.voter.submitVote(candidate);
  }

  public filterParty(event: Event){
    const term = (<HTMLSelectElement>event.target).value;
    if(!term){
      this.FilteredCandidates = this.election!.candidates;
      return
    }
    this.FilteredCandidates = this.election!.candidates.filter(candiate => candiate.party === term);
  }

  public filter(event: Event){
    const term = (<HTMLInputElement>event.target).value;
    if(!term){
      this.FilteredCandidates = this.election!.candidates;
      return
    }
    const regexp = new RegExp(term, 'gi')
    this.FilteredCandidates = this.election!.candidates.filter((candiate) => candiate.index.toString().match(term) || regexp.test(candiate.name));
  }
  
  protected refresh(){
    this.voter.refresh()
  }

  public enrollVoters(){
    this.httpSVC.enrollVoters(this.address);
  }

  
  public async repair(){
    await this.httpSVC.repairVoters(this.address);
  }

  public async repairVotes(){  
    await this.voter.repairFaultyVotes();
  }

  public toggleSort(){
    this.sort = (this.sort + 1) % (Object.keys(ESort).length / 2);
  }

  protected sortFn(candiateA: ICandidate, candiateB: ICandidate){
    if(this.sort === ESort.none){
      return 0
    }
    
    const comparison = candiateA.name.localeCompare(candiateB.name);
    return this.sort === ESort.up ? comparison : -comparison;
  }

  protected async getTallies(): Promise<number[]>{
    return await this.voter.getFinalTallies();
  }
}
