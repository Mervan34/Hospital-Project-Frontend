import { Component } from '@angular/core';
import { PatientadmissionService } from '../patientadmission.service';
import { PatientorganizationService } from '../patientorganization.service';
import { PatientstaffService } from '../patientstaff.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AdmissionDTO, newInstanceAdmissionDTO } from '../models/admission-dto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-patientcheck',
  templateUrl: './patientcheck.component.html',
  styleUrl: './patientcheck.component.css'
})
export class PatientcheckComponent {

  // admissionAddForm!: FormGroup;
  // admission:AdmissionDTO
  // http: any;
  

  // constructor(
  //   private admissionService:PatientadmissionService,
  //   private organizationService:PatientorganizationService,
  //   private staffService:PatientstaffService,
  //   private formBuilder: FormBuilder,
  //   private router:Router,
  
  // ){

  //   this.admission=newInstanceAdmissionDTO();
  //   this.admissionAddForm = this.formBuilder.group({
  //     // tcNo: ['', [Validators.required]],
  //     // firstName: ['', [Validators.required]],
  //     // lastName: ['', [Validators.required]],
  //     // age: ['', [Validators.required]],
  //     // gender: ['', [Validators.required]]
      
      
  //     //...this.admission 
      
  //     });
    
  // }



  // ngOnInit(): void {
    

  // }

  // onSubmit(){
  //   if(this.admissionAddForm.valid){
  //   //   this.http.post<boolean>('/api/check-patient', this.admissionAddForm.value).subscribe(response => {

  //   //     if (response) {
  //   //       // Bilgiler doğruysa, patient admission sayfasına yönlendir
  //   //       this.router.navigate(['/patient-admission']);
  //   //     }

  //   // }
    
  // }

  // }
}
