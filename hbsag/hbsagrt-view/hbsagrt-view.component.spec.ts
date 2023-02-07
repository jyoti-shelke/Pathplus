import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HbsagrtViewComponent } from './hbsagrt-view.component';

describe('HbsagrtViewComponent', () => {
  let component: HbsagrtViewComponent;
  let fixture: ComponentFixture<HbsagrtViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HbsagrtViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HbsagrtViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
