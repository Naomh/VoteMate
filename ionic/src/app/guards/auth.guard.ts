import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { DexieService } from '../services/dexie.service';
import { HttpService } from '../services/http.service';
import { randomHex } from 'web3-utils';

export const authGuard: CanActivateFn = async (route, state) => {
  const dexieSVC = inject(DexieService);
  const httpSVC = inject(HttpService);
  
  const queryparams = route.queryParams;
  
  if(queryparams['email']){
    const cookies = await httpSVC.verifyCookies();
    if(cookies){
      dexieSVC.setUser({email: queryparams['email'], password: randomHex(32)})
    }
  }

  const user = await dexieSVC.getUser();
  if(user){
    return true;
  }else{

    return false;
  }
};
