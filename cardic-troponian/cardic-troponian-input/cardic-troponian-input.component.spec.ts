import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardicTroponianInputComponent } from './cardic-troponian-input.component';

describe('CardicTroponianInputComponent', () => {
  let component: CardicTroponianInputComponent;
  let fixture: ComponentFixture<CardicTroponianInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardicTroponianInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardicTroponianInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
