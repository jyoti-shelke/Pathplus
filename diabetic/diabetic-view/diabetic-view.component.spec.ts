import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabeticViewComponent } from './diabetic-view.component';

describe('DiabeticViewComponent', () => {
  let component: DiabeticViewComponent;
  let fixture: ComponentFixture<DiabeticViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiabeticViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiabeticViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
