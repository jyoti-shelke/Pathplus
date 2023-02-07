import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProthrombinInputComponent } from './prothrombin-input.component';

describe('ProthrombinInputComponent', () => {
  let component: ProthrombinInputComponent;
  let fixture: ComponentFixture<ProthrombinInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProthrombinInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProthrombinInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
