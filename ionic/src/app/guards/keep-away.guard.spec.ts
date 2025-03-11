import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { keepAwayGuard } from './keep-away.guard';

describe('keepAwayGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => keepAwayGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
