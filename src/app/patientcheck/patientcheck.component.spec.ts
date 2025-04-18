import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientcheckComponent } from './patientcheck.component';

describe('PatientcheckComponent', () => {
  let component: PatientcheckComponent;
  let fixture: ComponentFixture<PatientcheckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PatientcheckComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientcheckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
