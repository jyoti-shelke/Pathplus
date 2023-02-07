import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MalariartViewComponent } from './malariart-view.component';

describe('TuberculosisViewComponent', () => {
  let component: MalariartViewComponent;
  let fixture: ComponentFixture<MalariartViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MalariartViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MalariartViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
  