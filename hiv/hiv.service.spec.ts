import { TestBed } from '@angular/core/testing';

import { HivService } from './hiv.service';

describe('HivService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HivService = TestBed.get(HivService);
    expect(service).toBeTruthy();
  });
});
