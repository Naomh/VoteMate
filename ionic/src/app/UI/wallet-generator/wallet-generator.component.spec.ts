import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WalletGeneratorComponent } from './wallet-generator.component';

describe('WalletGeneratorComponent', () => {
  let component: WalletGeneratorComponent;
  let fixture: ComponentFixture<WalletGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WalletGeneratorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WalletGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
