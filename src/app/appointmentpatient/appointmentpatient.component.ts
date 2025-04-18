import { Component, OnInit } from '@angular/core';
import { AdmissionDTO } from '../models/admission-dto.model';
import { PatientDTO } from '../models/patient-dto.model';
import { PatientadmissionService } from '../patientadmission.service';
import { CityService } from '../city.service';
import { DistrictService } from '../district.service';
import { PatientphoneService } from '../patientphone.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PatientService } from '../patient.service';
import { subscribe } from 'diagnostics_channel';
import { PatientPhone } from '../patientphone';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appointmentpatient',
  templateUrl: './appointmentpatient.component.html',
  styleUrl: './appointmentpatient.component.css'
})
export class AppointmentpatientComponent implements OnInit{

  admissions:AdmissionDTO[]=[];
  patients:PatientDTO[]=[];

  appointmentAddForm!: FormGroup;
  

  constructor(
    private patientService:PatientService,
    private admissionService:PatientadmissionService,
    private cityService:CityService,
    private districtService:DistrictService,
    private patintphoneService:PatientphoneService,
    private formBuilder: FormBuilder,
    private router:Router,
  ){
   // this.appointmentAddForm = this.formBuilder.group({...this.admissions});
  }

  ngOnInit(): void {
    //this.getPatients();
    this.getPatientss();

    console.log(this.admissions)
  }

  private getPatientss(){
    this.admissionService.getAdmissionList().subscribe(data => {
      this.admissions = data.sort((c, d) => c.admissionId - d.admissionId)
    });
  }

  updateAdmission(admissionId:number){
    this.router.navigate(['update-admission',admissionId]);
  }

  deleteAdmission(admissionId: number) {
    this.admissionService.deleteAdmission(admissionId).subscribe({
      next: (data) => {
        console.log(data);
        this.getPatientss();
      },
      error: (error) => console.log(error)
    });
  }


}
