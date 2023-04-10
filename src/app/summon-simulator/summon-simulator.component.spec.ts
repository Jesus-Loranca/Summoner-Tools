import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonSimulatorComponent } from './summon-simulator.component';

describe('SummonSimulatorComponent', () => {
  let component: SummonSimulatorComponent;
  let fixture: ComponentFixture<SummonSimulatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonSimulatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonSimulatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
