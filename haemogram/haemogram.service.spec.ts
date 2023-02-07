import { TestBed, inject } from '@angular/core/testing';
import { HaemogramService } from './haemogram.service';

describe('HaemogramService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HaemogramService]
    });
  });

  it('should be created', inject([HaemogramService], (service: HaemogramService) => {
    expect(service).toBeTruthy();
  }));
});
