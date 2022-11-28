import { TestBed } from '@angular/core/testing';

import { NgxBitnobService } from './ngx-bitnob.service';

describe('NgxBitnobService', () => {
  let service: NgxBitnobService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBitnobService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
