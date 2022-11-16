import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MSCDashboardComponent } from './mscdashboard.component';

describe('MSCDashboardComponent', () => {
  let component: MSCDashboardComponent;
  let fixture: ComponentFixture<MSCDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MSCDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MSCDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
