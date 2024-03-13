import { TestBed } from '@angular/core/testing';

import { LocationCheckService } from './location-check.service';

describe('LocationCheckService', () => {
  let service: LocationCheckService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocationCheckService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
