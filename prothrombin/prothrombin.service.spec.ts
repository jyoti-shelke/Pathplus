import { TestBed } from '@angular/core/testing';

import { ProthrombinService } from './prothrombin.service';

describe('ProthrombinService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProthrombinService = TestBed.get(ProthrombinService);
    expect(service).toBeTruthy();
  });
});
