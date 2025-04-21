import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { ILoginForm, IRegisterForm, IResetPwForm } from '../UI/loginform/loginform.component';
import { firstValueFrom, Observable } from 'rxjs';
import { IUser } from './dexie.service';
import { IElection, IElectionQuery } from '../UI/election-list/election.interface';

interface IOAuht {
  clientId: string;
  redirectURL: string;
}

@Injectable({
  providedIn: 'root'
})
export class HttpService {


  private _http = inject(HttpClient);
  private _api = 'http://localhost:3000/'; //http://192.168.0.248:3000/'//'http://localhost:3000/'
  private _OAuthCID!: string;
  private _OAuthRedirectUrl!: string;
  private _rootUrl: string = 'https://accounts.google.com/o/oauth2/v2/auth';
  private onlineStatus = signal(navigator.onLine)
  
  private _OAuthOptions = {
    redirect_uri: this._OAuthRedirectUrl,
    client_id: this._OAuthCID,
    access_type: 'offline',
    response_type: 'code',
    prompt: 'consent',
    scope: [
      'https://www.googleapis.com/auth/userinfo.profile',
      'https://www.googleapis.com/auth/userinfo.email',
    ].join(' '),
  };

  get OnlineStatus(){
    return this.onlineStatus
  }

  constructor() {
    this._getOauthDetails()
    window.addEventListener('online', this.updateOnlineStatus.bind(this));
    window.addEventListener('offline', this.updateOnlineStatus.bind(this));
  }
  
  private updateOnlineStatus(){
    this.onlineStatus.set(navigator.onLine);
  } 


  private async _getOauthDetails() {
    try {
      const response = await this._http
        .get<IOAuht>(this._api + 'GoogleClient')
        .toPromise();
      this._OAuthCID = response!.clientId;
      this._OAuthRedirectUrl = response!.redirectURL;
      this._OAuthOptions.redirect_uri = this._OAuthRedirectUrl;
      this._OAuthOptions.client_id = this._OAuthCID;
    } catch (error) {
      throw(error);
    }
  }

  public googleLogin() {
    const qs = new URLSearchParams(this._OAuthOptions);
    window.location.replace(this._rootUrl + '?' + qs.toString());
  }
  
  public register(user: IRegisterForm){
    return firstValueFrom(this._http.post(this._api + 'register', user, {withCredentials: true}))
  }

  public logIn(user: ILoginForm){
    return firstValueFrom(this._http.post(this._api + 'login', user, {withCredentials: true}))
  }

  public registerWallet(address: string){
    return firstValueFrom(this._http.post(this._api + 'registerWallet', address, {withCredentials: true}));
  }
  
  public verifyCookies(){
    return firstValueFrom(this._http.post(this._api + 'verifyCookie', {withCredentials: true}));
  }

  public refreshSession(): Promise<IUser>{
      return firstValueFrom(this._http.post<IUser>(this._api + 'reissue',{}, {withCredentials: true}));
  }
  public getAvailableElections(): Promise<IElection[]> {
    return firstValueFrom(this._http.post<IElection[]>(this._api + 'getElections', {}, {withCredentials: true}));
  }

  public splitGroups(address:string){
    return firstValueFrom(this._http.post(this._api + 'splitGroups',{address: address}, {withCredentials: true}));
  }
  
  public finishSetupPhase(address: string) {
    return firstValueFrom(this._http.post(this._api + 'finishSetup',{address: address}, {withCredentials: true}));
  }
  
  public precomputeMPCKeys(address: string) {
    return firstValueFrom(this._http.post(this._api + 'precomputeMPC',{address: address}, {withCredentials: true}));
  }

  public computeMPCKeys(address: string) {
    return firstValueFrom(this._http.post(this._api + 'computeMPCs',{address: address}, {withCredentials: true}));
  }

  public computeBlindedVotesSum(address: string, ECaddress: string) {
    return firstValueFrom(this._http.post(this._api + 'computeBlindedVotesSum', {address: address, ECaddress: ECaddress}, {withCredentials: true}));
  }

  public computeGroupTallies(address: string, ECaddress: string) {
    return firstValueFrom(this._http.post(this._api + 'computeGroupTallies', {address: address, ECaddress: ECaddress}, {withCredentials: true}));
  }

  public enrollVoter(address: string, walletAddress: string): Promise<void>{
    return firstValueFrom(this._http.post<void>(this._api + 'enrollVoter', {contract: address, wallet: walletAddress}, {withCredentials: true}));
  } 

  public generateElection(){
    return firstValueFrom(this._http.post<any>(this._api + 'createElection', {}, {withCredentials: true}));
  }

  public enrollVoters(address: string){
    return firstValueFrom(this._http.post<any>(this._api + 'enrollVoters', {address}, {withCredentials: true}));
  }

  public createElection(election: IElectionQuery){
    return firstValueFrom(this._http.post<boolean>(this._api + 'createElection', {...election}, {withCredentials: true}));
  }

  public resetPassword(email: IResetPwForm){
    return firstValueFrom(this._http.post<void>(this._api + 'resetPW', email));
  }

  public submitVote(address: string, vote: number) {
    return firstValueFrom(this._http.post<void>(this._api + 'submitVote', {address, vote}, {withCredentials: true}))
  }
}
