import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MsctestserverComponent } from './msctestserver.component';

describe('MsctestserverComponent', () => {
  let component: MsctestserverComponent;
  let fixture: ComponentFixture<MsctestserverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MsctestserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MsctestserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
