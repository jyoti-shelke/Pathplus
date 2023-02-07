import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaemogramTestViewComponent } from './haemogram-test-view.component';

describe('HaemogramTestViewComponent', () => {
  let component: HaemogramTestViewComponent;
  let fixture: ComponentFixture<HaemogramTestViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaemogramTestViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaemogramTestViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
