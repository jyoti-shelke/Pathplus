import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HivInputComponent } from './hiv-input.component';

describe('HivInputComponent', () => {
  let component: HivInputComponent;
  let fixture: ComponentFixture<HivInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HivInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HivInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
