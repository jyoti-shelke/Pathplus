import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiochemistryViewComponent } from './biochemistry-view.component';

describe('BiochemistryViewComponent', () => {
  let component: BiochemistryViewComponent;
  let fixture: ComponentFixture<BiochemistryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiochemistryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiochemistryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
