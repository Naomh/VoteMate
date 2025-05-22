import { Injectable } from '@angular/core';
import { ethers, JsonRpcProvider, Wallet } from 'ethers';
import Web3, { Address, ContractAbi} from 'web3';
import { isAddress } from 'web3-validator';
import { environment } from '../../environments/environment';
const MainVotingC = require('../../assets/contracts/MainVotingC.json'); 


const mainVotingContract = require('../../assets/contracts/MainVotingC.json');

export interface IWallet{
  mnemonic: string;
  address: string;
  privateKey: string;
}

@Injectable({
  providedIn: 'root'
})
export class Web3Service {

  private _web3: Web3 = new Web3(environment.web3network)
  private ethersProvider: JsonRpcProvider = new ethers.JsonRpcProvider(environment.web3network)//('http://127.0.0.1:9545');
  public unlock!: () => void;

  constructor(){
  
  }
  

  addWallet(pk: string){
    this._web3.eth.accounts.wallet.add(pk);
  }

  async getWalletfromPk(pk:string, password:string){
    const account = await this._web3.eth.accounts.privateKeyToAccount(pk);
    this._web3.eth.accounts.wallet.add(account);

    if(!(await this._web3.eth.getAccounts()).includes(account.address))
    {
      this._web3.eth.personal.importRawKey(account.privateKey, password);
    }

    this.unlock = async () =>{
      const unlocked = await this._web3.eth.personal.unlockAccount(
        account.address,
        password,
        86400
      );
      if (!unlocked) {
      throw new Error('Failed to unlock account');
      } 
    }
 
  
    return account;
  }

  checkBalance(address: string) {
    return this._web3.eth.getBalance(address).then(balance => {
      const etherBalance = this._web3.utils.fromWei(balance, 'ether');
      return parseFloat(parseFloat(etherBalance).toFixed(3));
    });
  }

  getAccounts(){
   return this._web3.eth.getAccounts();
  }

  generateWallet(): IWallet {
    const {mnemonic, address, privateKey} = ethers.Wallet.createRandom(this.ethersProvider);
    this._web3.eth.accounts.wallet.add(privateKey);
    return {
      mnemonic: mnemonic!.phrase,
      address,
      privateKey
    };
  }

  getWalletFromMnemonic(mnemomic:string): IWallet {
    const wallet = Wallet.fromPhrase(mnemomic, this.ethersProvider);
    
    return {
      address: wallet.address,
      privateKey: wallet.privateKey,
      mnemonic: mnemomic
    };
  }

async isVoterEligible(address: Address, voterAddress: Address): Promise<boolean>{
  try{
    const contract = await this.getSmartContract(address, mainVotingContract.abi);
    return contract.methods['isVoterEligible'](voterAddress).call();
  }catch{
    throw new Error('Invalid or unreachable smart contract address');
  }

}

 getSmartContract(address: string, abi: ContractAbi){
    if(!isAddress(address)){
      throw new Error('Contract address doesn\'t exist');
    }
    return new this._web3.eth.Contract(abi, address);
  }

  async getStage(address: string): Promise<bigint>{
    const contract = await this.getSmartContract(address, MainVotingC.abi);
    const stage = await contract.methods['stage']().call() as bigint;
    return stage;
  }


  

}