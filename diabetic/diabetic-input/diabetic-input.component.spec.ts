import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabeticInputComponent } from './diabetic-input.component';

describe('DiabeticInputComponent', () => {
  let component: DiabeticInputComponent;
  let fixture: ComponentFixture<DiabeticInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiabeticInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabeticInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
