import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaemogramInputComponent } from './haemogram-input.component';

describe('HaemogramComponent', () => {
  let component: HaemogramInputComponent;
  let fixture: ComponentFixture<HaemogramInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaemogramInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaemogramInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
