import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFunctionalitiesComponent } from './angular-functionalities.component';

describe('AngularFunctionalitiesComponent', () => {
  let component: AngularFunctionalitiesComponent;
  let fixture: ComponentFixture<AngularFunctionalitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularFunctionalitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFunctionalitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
