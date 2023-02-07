import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HbsagrtInputComponent } from './hbsagrt-input.component';

describe('HbsagrtInputComponent', () => {
  let component: HbsagrtInputComponent;
  let fixture: ComponentFixture<HbsagrtInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HbsagrtInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HbsagrtInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
