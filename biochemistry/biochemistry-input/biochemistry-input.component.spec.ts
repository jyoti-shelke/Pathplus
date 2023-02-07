import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiochemistryInputComponent } from './biochemistry-input.component';

describe('BiochemistryInputComponent', () => {
  let component: BiochemistryInputComponent;
  let fixture: ComponentFixture<BiochemistryInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiochemistryInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiochemistryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
