import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionComponent } from './election.component';

describe('ElectionComponent', () => {
  let component: ElectionComponent;
  let fixture: ComponentFixture<ElectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
