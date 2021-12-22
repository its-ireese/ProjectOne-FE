import { TestBed } from '@angular/core/testing';

import { EmployeePendingService } from './employee-pending.service';

describe('EmployeePendingService', () => {
  let service: EmployeePendingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeePendingService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
