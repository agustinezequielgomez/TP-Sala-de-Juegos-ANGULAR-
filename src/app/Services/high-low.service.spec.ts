import { TestBed } from '@angular/core/testing';

import { HighLowService } from './high-low.service';

describe('HighLowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HighLowService = TestBed.get(HighLowService);
    expect(service).toBeTruthy();
  });
});
