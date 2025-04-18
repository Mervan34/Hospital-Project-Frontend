import { TestBed } from '@angular/core/testing';

import { PatientorganizationService } from './patientorganization.service';

describe('PatientorganizationService', () => {
  let service: PatientorganizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientorganizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
