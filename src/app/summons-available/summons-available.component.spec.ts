import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummonsAvailableComponent } from './summons-available.component';

describe('SummonsAvailableComponent', () => {
  let component: SummonsAvailableComponent;
  let fixture: ComponentFixture<SummonsAvailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummonsAvailableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SummonsAvailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
