import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalariartInputComponent } from './malariart-input.component';

describe('MalariaRtInputComponent', () => {
  let component: MalariartInputComponent;
  let fixture: ComponentFixture<MalariartInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalariartInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalariartInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
}); 
