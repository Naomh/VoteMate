import { Component, EventEmitter, inject, input, Input, OnInit, Output } from '@angular/core';
import { Web3Service } from '../../services/web3.service';
import { HttpService } from '../../services/http.service';
import { DexieService, IUser } from '../../services/dexie.service';
import { ElectionstagePipe } from '../../pipes/electionstage.pipe';
import { RouterModule } from '@angular/router';
import { Address } from 'web3';
import { AsyncPipe } from '@angular/common';
import { ButtonComponent } from "../button/button.component";
const MainVotingC = require('../../../assets/contracts/MainVotingC.json') 


@Component({
  selector: 'app-election-card',
  standalone: true,
  imports: [ElectionstagePipe, RouterModule, AsyncPipe, ButtonComponent],
  templateUrl: './election-card.component.html',
  styleUrl: './election-card.component.scss'
})
export class ElectionCardComponent implements OnInit {
  // #region Inputs and Outputs
  @Input() name!: string;
  @Input() address!: string;
  @Input() id!: string;
  @Input() user!: IUser | undefined;
  @Input() description: string = "";
  @Output() preview = new EventEmitter<string>();
  // #endregion

  // #region Services and Contract
  private web3SVC: Web3Service = inject(Web3Service);
  private httpSVC: HttpService = inject(HttpService);
  private dexieSVC = inject(DexieService);
  private contract!: any;
  // #endregion

  // #region State Variables
  protected stage: number = -1;
  protected isEligible!: boolean;
  // #endregion

  // #region Lifecycle Methods
  async ngOnInit(): Promise<void> {
    this.contract = await this.web3SVC.getSmartContract(this.address, MainVotingC.abi);
    this.isEligible = await this.contract.methods['isVoterEligible'](this.user?.wallet).call();
    this.stage = await this.contract.methods.stage().call();
  }
  // #endregion

  // #region Methods
  protected selectElection() {
    this.dexieSVC.selectElection(this.id);
  }

  public async enroll(button: ButtonComponent) {
    if (!this.user || !this.user.wallet) {
      button.setFailure();
      return;
    }

    try {
      button.state = 'loading';
      await this.httpSVC.enrollVoter(this.address, this.user.wallet);
      button.setSuccess();
    } catch (e) {
      button.setFailure();
    }
    button.state = 'ready';
  }

  public async toPreview() {
    this.preview.emit(this.address);
  }

  public async enrollVoters() {
    this.web3SVC;
    this.httpSVC.enrollVoters(this.address);
  }
  // #endregion
}
