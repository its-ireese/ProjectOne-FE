import { TestBed } from '@angular/core/testing';

import { EmployeeResolvedService } from './employee-resolved.service';

describe('EmployeeResolvedService', () => {
  let service: EmployeeResolvedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeResolvedService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
