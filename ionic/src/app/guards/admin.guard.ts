import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { HttpService } from '../services/http.service';
import { DexieService } from '../services/dexie.service';
import { Router } from '@angular/router';

export const adminGuard: CanActivateFn = async (route, state) => {
  const httpSVC = inject(HttpService);
  const dexieSVC = inject(DexieService);
  const router = inject(Router);

  await dexieSVC.refresh();
  const user = dexieSVC.user();

  if (!user) {
    router.navigate(['/list']);
    return false;
  }
  
  const result = await httpSVC.isAdmin(user);
  if(result.isAdmin){
    return true
  }
  router.navigate(['/list']);
  return false;
};
