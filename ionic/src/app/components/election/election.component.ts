import { Component, inject, OnInit, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Web3Service } from '../../services/web3.service';
import { DexieService } from '../../services/dexie.service';
import { HttpService } from '../../services/http.service';
import { Contract, ERR_PARAM } from 'web3';
import { ICandidate, IElection } from '../../UI/election-list/election.interface';
import { CommonModule, DatePipe } from '@angular/common';
import { Voter } from './voter';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ButtonComponent } from "../../UI/button/button.component";
const MainVotingC = require('../../../assets/contracts/MainVotingC.json');
const VotingBoothC = require('../../../assets/contracts/VotingBoothC.json');

@Component({
  selector: 'app-election',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule, DatePipe, ButtonComponent],
  templateUrl: './election.component.html',
  styleUrl: './election.component.scss'
})
export class ElectionComponent implements OnInit{

  private web3SVC = inject(Web3Service);
  private dexieSVC = inject(DexieService);
  private httpSVC = inject(HttpService);

  private router = inject(Router)
  private route = inject(ActivatedRoute)

  private address!: string;
  private user = this.dexieSVC.user();
  private voter!: Voter;

  protected contract!:Contract<any> | undefined;
  protected election!: IElection | undefined;
  protected FilteredCandidates!: ICandidate[];
  protected isEligible!: boolean;

  protected form = new FormGroup({
    selectedCandidate: new FormControl('', Validators.required), 
  });


  async ngOnInit(): Promise<void> {
    const address = this.route.snapshot.paramMap.get('id');
    if(!address || !this.user?.wallet){
      this.router.navigate(['/list']);
      return;
    }
    this.address = address;
    
    this.voter = new Voter(this.address, this.user.wallet, this.web3SVC, this.dexieSVC);
    
    this.contract = await this.web3SVC.getSmartContract(this.address, MainVotingC.abi);
    if(!this.contract){
      this.router.navigate(['/list']);
      throw new Error('smart the smat contract is unreachable');
    }

    this.isEligible = await this.web3SVC.isVoterEligible(this.address, this.user.wallet);

    this.election = await this.dexieSVC.getElection(this.address);
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
    this.voter.submitPK();
  }

  async computeMPCkeys(){
    await this.httpSVC.precomputeMPCKeys(this.address);
  }

  async vote(button: ButtonComponent){
    if (!this.form.valid) {
      button.setFailure('Select your candidate.')
      return
    }
      button.state = 'loading';
      const candidate = parseInt(this.form.value.selectedCandidate as string, 10);

      try{
        await this.voter.submitVote(candidate);
      }catch(e){
        console.error(e);
        button.setFailure();
      }
      finally{
        button.state = 'ready';
      }
 
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
    this.FilteredCandidates = this.election!.candidates.filter((candiate) => candiate.index.toString().match(term) || regexp.test(candiate.name))
  }
  
  enrollVoters(){
    this.httpSVC.enrollVoters(this.address);
  }

  }
