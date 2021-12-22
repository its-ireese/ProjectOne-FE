import { TestBed } from '@angular/core/testing';

import { ResolvedService } from './resolved.service';

describe('ResolvedService', () => {
  let service: ResolvedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolvedService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
