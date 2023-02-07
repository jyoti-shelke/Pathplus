import { TestBed } from '@angular/core/testing';

import { MalariartService } from './malariart.service';

describe('TuberculosisrtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MalariartService = TestBed.get(MalariartService);
    expect(service).toBeTruthy();
  });
});
