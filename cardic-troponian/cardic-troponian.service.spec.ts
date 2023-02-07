import { TestBed } from '@angular/core/testing';

import { CardicTroponianService } from './cardic-troponian.service';

describe('CardicTroponianService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CardicTroponianService = TestBed.get(CardicTroponianService);
    expect(service).toBeTruthy();
  });
});
