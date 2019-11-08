import { TestBed } from '@angular/core/testing';

import { GviveService } from './gvive.service';

describe('GviveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GviveService = TestBed.get(GviveService);
    expect(service).toBeTruthy();
  });
});
