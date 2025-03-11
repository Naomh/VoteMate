import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectionCreatorComponent } from './election-creator.component';

describe('ElectionCreatorComponent', () => {
  let component: ElectionCreatorComponent;
  let fixture: ComponentFixture<ElectionCreatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ElectionCreatorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ElectionCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
