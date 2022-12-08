import { TestBed } from '@angular/core/testing';

import { FakestoreeeService } from './fakestoreee.service';

describe('FakestoreeeService', () => {
  let service: FakestoreeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FakestoreeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
