import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TallyChartComponent } from './tally-chart.component';

describe('TallyChartComponent', () => {
  let component: TallyChartComponent;
  let fixture: ComponentFixture<TallyChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TallyChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TallyChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
