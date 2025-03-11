import { CanActivateFn } from '@angular/router';

export const keepAwayGuard: CanActivateFn = (route, state) => {
  console.log(route);
  return true;
};
