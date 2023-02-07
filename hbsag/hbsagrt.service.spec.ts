import { TestBed } from '@angular/core/testing';

import { HbsagrtService } from './hbsagrt.service';

describe('HbsagrtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HbsagrtService = TestBed.get(HbsagrtService);
    expect(service).toBeTruthy();
  });
});
