import { TestBed } from '@angular/core/testing';

import { PatientstaffService } from './patientstaff.service';

describe('PatientstaffService', () => {
  let service: PatientstaffService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientstaffService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
