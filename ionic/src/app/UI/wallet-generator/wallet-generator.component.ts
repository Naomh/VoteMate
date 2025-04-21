import { Component, inject } from '@angular/core';
import { IWallet, Web3Service } from '../../services/web3.service';
import { BehaviorSubject } from 'rxjs';
import { CommonModule } from '@angular/common';
import { Form, FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { DexieService } from '../../services/dexie.service';
import { HttpService } from '../../services/http.service';
import { Mnemonic, Wallet } from 'ethers';
import { RouterModule } from '@angular/router';

type State = 'init' | 'mnemonic' | 'validation' | 'success' | 'recovery';

@Component({
  selector: 'UI-wallet-generator',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, RouterModule],
  templateUrl: './wallet-generator.component.html',
  styleUrl: './wallet-generator.component.scss'
})
export class WalletGeneratorComponent {
  private web3SVC = inject(Web3Service);
  private dexieSVC = inject(DexieService);
  private httpSVC = inject(HttpService);
  private formBuilder = inject(FormBuilder);
  
  protected form: FormGroup;
  protected stateSubject$ = new BehaviorSubject<State>('init');
  protected wallet!: IWallet;
  
  protected recoveryPhrase = Array(12);
  protected recoveryForm: FormGroup;
  constructor(){
    const controlsConfig:{[key:string]:Array<string | Function>} = {};

    for(let i = 0; i < 12; i++){
      controlsConfig[`word${i}`] = ['', Validators.required];
    };

    this.form = this.formBuilder.group(controlsConfig, { validators: this.mnemonicValidator.bind(this) });
    this.recoveryForm = this.formBuilder.group(controlsConfig);
  } 


  private mnemonicValidator(formGroup: FormGroup) {
      if (!this.wallet?.mnemonic){
        return false
      }
      let status = true;
      const words = this.wallet.mnemonic.split(' ');
      for(const [index, value] of Object.entries(Object.values(formGroup.value))){
        status = status && words[parseInt(index, 10)] === value
      }
      return status === true? null : {mismatch: true};
  }

  protected setState(state: State){
    this.stateSubject$.next(state)
  }
  protected generateWallet(){
    this.wallet = this.web3SVC.generateWallet();
    this.form.clearValidators();
    this.wallet.mnemonic.split(" ").forEach((word, index)=>{
      const control = this.form.get('word'+index);
      if(control && this.display()){
        control.setValue(word);
      }
    })
  }

  protected recover(){
    try{
    const mnemonic = Object.values(this.recoveryForm.value).join(' ');
      this.wallet =  this.web3SVC.getWalletFromMnemonic(mnemonic)
      this.save();
      this.setState('success');
    }catch(e){
      throw new Error('Invalid mnemonic')
    }
  }

  protected display(): boolean{
    return Math.random() > 0.35;
  }
  
  protected async save(){
    await this.dexieSVC.setWallet(this.wallet);
  }
}
