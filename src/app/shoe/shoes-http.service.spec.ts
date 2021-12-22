import { TestBed } from '@angular/core/testing';

import { ShoesHttpService } from './shoes-http.service';

describe('ShoesHttpService', () => {
  let service: ShoesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoesHttpService);
  });

  // it('should be created', () => {
  //   expect(service).toBeTruthy();
  // });
});
