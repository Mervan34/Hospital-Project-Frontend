import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentpatientComponent } from './appointmentpatient.component';

describe('AppointmentpatientComponent', () => {
  let component: AppointmentpatientComponent;
  let fixture: ComponentFixture<AppointmentpatientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppointmentpatientComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentpatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
