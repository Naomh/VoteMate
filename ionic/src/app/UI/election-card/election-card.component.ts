import { Component, EventEmitter, inject, input, Input, OnInit, Output } from '@angular/core';
import { Web3Service } from '../../services/web3.service';
import { HttpService } from '../../services/http.service';
import { DexieService, IUser } from '../../services/dexie.service';
import { ElectionstagePipe } from '../../pipes/electionstage.pipe';
import { RouterModule } from '@angular/router';
import { ButtonComponent, ButtonHandler } from "../button/button.component";
import { StageToActionPipe } from "../../pipes/stage-to-action.pipe";
import { SnackbarService } from '../../services/snackbar.service';
const MainVotingC = require('../../../assets/contracts/MainVotingC.json') 


@Component({
    selector: 'app-election-card',
    imports: [ElectionstagePipe, RouterModule, ButtonComponent, StageToActionPipe],
    templateUrl: './election-card.component.html',
    styleUrl: './election-card.component.scss'
})
export class ElectionCardComponent extends ButtonHandler implements OnInit{
  // #region Inputs and Outputs
  @Input() name!: string;
  @Input() address!: string;
  @Input() id!: string;
  @Input() user!: IUser | undefined;
  @Input() description: string = "";
  @Input() registered: boolean = false;
  @Output() preview = new EventEmitter<string>();
  // #endregion

  // #region Services and Contract
  private web3SVC = inject(Web3Service);
  private httpSVC = inject(HttpService);
  private dexieSVC = inject(DexieService);
  private snackbarSVC = inject(SnackbarService)
  private contract!: any;
  // #endregion

  // #region State Variables
  protected isAdmin = this.dexieSVC.isAdmin;
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

  public async enroll() {
    if (!this.user || !this.user.wallet) {
      
      throw Error('Your account is not set-up properly');
    }
    const response = await this.httpSVC.enrollVoter(this.address, this.user.wallet);
    this.registered = true;
    this.dexieSVC.addOrUpdateElectionRecord(response.election);
    //await this.dexieSVC.updateElectionsSignal(false);
    this.snackbarSVC.show('Enrolled', 'success');
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
