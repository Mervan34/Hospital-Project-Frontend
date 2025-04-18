import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Router } from '@angular/router';
import { PatientPhone } from '../patientphone';
import { PatientphoneService } from '../patientphone.service';
import { PatientDTO } from '../models/patient-dto.model';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrl: './patient-list.component.css'
})
export class PatientListComponent implements OnInit{

  patients: PatientDTO[] = [];
  patientphone:PatientPhone[] = [];

  constructor(private patientService:PatientService,
    private patientphoneService:PatientphoneService,
    private router:Router
  ){ 
    
  }

  ngOnInit(): void {
    this.getPatients();
  }

  private getPatients() {
    this.patientService.getPatientList().subscribe(data => {
      this.patients = data.sort((a, b) => a.patientId - b.patientId);
    });
  }
  

  updatePatient(id:number){
    this.router.navigate(['update-patient',id]);
  }

  deletePatient(id: number) {
    this.patientService.deletePatient(id).subscribe({
      next: (data) => {
        console.log(data);
        this.getPatients();
      },
      error: (error) => console.log(error)
    });
  }

}
