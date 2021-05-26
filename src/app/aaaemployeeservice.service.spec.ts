import { TestBed } from '@angular/core/testing';

import { AaaemployeeserviceService } from './aaaemployeeservice.service';

describe('AaaemployeeserviceService', () => {
  let service: AaaemployeeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AaaemployeeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
