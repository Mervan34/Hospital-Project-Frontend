import { TestBed } from '@angular/core/testing';

import { PatientphoneService } from './patientphone.service';

describe('PatientphoneService', () => {
  let service: PatientphoneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientphoneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
