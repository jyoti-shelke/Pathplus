import { TestBed } from '@angular/core/testing';

import { BiochemistryService } from './biochemistry.service';

describe('BiochemistryService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BiochemistryService = TestBed.get(BiochemistryService);
    expect(service).toBeTruthy();
  });
});
