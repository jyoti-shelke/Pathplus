import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HaemogramListComponent } from './haemogram-list.component';

describe('HaemogramListComponent', () => {
  let component: HaemogramListComponent;
  let fixture: ComponentFixture<HaemogramListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaemogramListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaemogramListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
