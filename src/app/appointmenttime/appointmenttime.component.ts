import { Component, OnInit } from '@angular/core';
import { Patientorganization } from '../patientorganization';
import { Patientstaff } from '../patientstaff';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Appointment, newInstanceAppointment } from '../appointment';
import { AppointmentService } from '../appointment.service';
import { PatientorganizationService } from '../patientorganization.service';
import { newInstancePatientDTO, PatientDTO } from '../models/patient-dto.model';
import { newInstancePatient } from '../patient';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../patient.service';
import { Dtoappointment, newInstancedtoAppointment } from '../models/dtoappointment';

@Component({
  selector: 'app-appointmenttime',
  templateUrl: './appointmenttime.component.html',
  styleUrl: './appointmenttime.component.css'
})
export class AppointmenttimeComponent implements OnInit {

  organizations: Patientorganization[] = [];
  staffs: Patientstaff[] = [];
  appointments: Appointment[] = [];
  AppointmentTimeForm!: FormGroup;
  AppointmentCheckForm!: FormGroup;
  appointment: Dtoappointment;
  patient: PatientDTO;



  constructor(
    private patientService: PatientService,
    private appointmentService: AppointmentService,
    private organizationService: PatientorganizationService,
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private route: Router,
  ) {
    this.appointment = newInstancedtoAppointment();
    this.patient = newInstancePatientDTO();
    this.AppointmentCheckForm = this.formBuilder.group({ ...this.patient });
    this.AppointmentTimeForm = this.formBuilder.group({ ...this.appointment });
    //this.patientadmissionAddForm = this.formBuilder.group({ ...this.patient });

  }

  ngOnInit(): void {
    this.getAppointment();
  }

  getAppointment(): void {
    this.organizationService.getAppointmentOrganization().subscribe(data => {
      this.organizations = data;
      console.log('mervannn');
    })
  }

  goToAppointmentList() {
    this.route.navigate(['/appointment-list']);
  }

  onSubmit(){
  }

  saveAppointment() {
    this.setFields();

    this.appointmentService.createAppointment(this.appointment).subscribe({
      next: () => this.goToAppointmentList(),

    })
    
    
  
    

    // this.admissionService.createAdmission(this.admission).subscribe({
    //   next: () => this.goToPatientList(),

  }

  getAppointmentCheck() {
    console.log('22222222');
    const tcNo = this.AppointmentCheckForm.get('tcNo')?.value;

    if (tcNo) {
      this.patientService.getPatientByTc(tcNo).subscribe({
        next: (result: PatientDTO) => {
          this.patient = result;
        },

        error: () => {
          console.error('Hasta bulunamadı');
        },
        complete: () => {
          this.AppointmentCheckForm.patchValue(this.patient);
        },
      });

    }
  }



  getAppointmentTime() {
    this.setFields();
  }

  onAppointmentTimeChange(event: Event): void {

    const organizationId = this.AppointmentTimeForm.get('organizationId')?.value;
    this.appointmentService.getAppointmentByOrganization(organizationId).subscribe(
      data => {
        this.appointments = data;
        console.log(this.appointment.appointmentId);
      }
    )
  }

  setFields() {

    const organizationId = this.AppointmentTimeForm.get('organizationId')?.value;
    const patientId = this.AppointmentTimeForm.get('patientId')?.value;

    this.appointment.appointmentId = this.AppointmentTimeForm.get('appointmentId')?.value;
    // this.appointment.starttime = this.AppointmentTimeForm.get('appointmentId')?.value.starttime;
    // this.appointment.endtime = this.AppointmentTimeForm.get('appointmentId')?.value.endtime;
    // this.appointment.organizationId = { organizationId: organizationId, name: '' };
    this.appointment.patient = this.patient;


  }

}
