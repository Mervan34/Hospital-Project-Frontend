import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdmissionDTO, newInstanceAdmissionDTO } from '../models/admission-dto.model';
import { newInstancePatientDTO, PatientDTO } from '../models/patient-dto.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Patientorganization } from '../patientorganization';
import { Patientstaff } from '../patientstaff';
import { PatientorganizationService } from '../patientorganization.service';
import { PatientstaffService } from '../patientstaff.service';
import { PatientadmissionService } from '../patientadmission.service';
import { newInstancePatient } from '../patient';
import { Patientadmission } from '../patientadmission';

@Component({
  selector: 'app-updateadmission',
  templateUrl: './updateadmission.component.html',
  styleUrl: './updateadmission.component.css'
})
export class UpdateadmissionComponent implements OnInit{
 
  organizations: Patientorganization[] = [];
  staffs: Patientstaff[] = [];

  updateadmissionForm!: FormGroup;
  updateorganizationForm!:FormGroup;
  admission: AdmissionDTO;
  patient: PatientDTO;

  
  constructor(
    private admissionService:PatientadmissionService,
    private organizationService:PatientorganizationService,
    private staffService:PatientstaffService,
    private formBuilder: FormBuilder,
    private router:ActivatedRoute,
    private route:Router

  ){
    this.patient = newInstancePatientDTO();
    this.admission = newInstanceAdmissionDTO();
    this.updateadmissionForm = this.formBuilder.group({...this.patient});
    this.updateorganizationForm = this.formBuilder.group({...this.admission})

  }

  ngOnInit(): void {
    this.getOrganization();

    this.admission.admissionId = this.router.snapshot.params['admissionId'];
    this.admissionService.getAdmissionById(this.admission.admissionId).subscribe({
      next: (result: AdmissionDTO) => {
        this.admission = result;
        const newPatientDTO = newInstancePatientDTO();
        Object.assign(newPatientDTO,result.patientId)
        this.patient=newPatientDTO;

        this.updateorganizationForm.patchValue({ ...this.admission });
        this.updateadmissionForm.patchValue({...this.patient});
      },
    });

    // this.admissionService.getAdmissionById(this.admission.admissionId).subscribe(data=>{



    //   const newAdmissionDTO = newInstanceAdmissionDTO();
    //   Object.assign(newAdmissionDTO, data);
    //   this.admission=newAdmissionDTO;

    //   const newPatientDTO = newInstancePatientDTO();
    //   Object.assign(newPatientDTO,data.patientId)
    //   this.patient=newPatientDTO;


    //   this.updateadmissionForm.patchValue(this.patient);
    //   this.updateadmissionForm.setValue({
    //     tcNo:this.patient.tcNo,
    //     firstName:this.patient.firstName,
    //     lastName:this.patient.lastName,
    //     age:this.patient.age,
    //     gender:this.patient.gender,
    //   })

    //   this.updateorganizationForm.patchValue(this.admission);
    //   this.updateorganizationForm.setValue({
    //     admissionId:this.admission.admissionId,
    //     admissionDate:this.admission.admissionDate,
    //     admissionType:this.admission.admissionType,
    //     note:this.admission.note,
    //     status:this.admission.status,
    //     patientId: null,
    //     organizationId:{
    //       organizationId:this.admission.organizationId?.organizationId,
    //       name:this.admission.organizationId?.name,
    //     },
    //     staffId:{
    //       staffId:this.admission.staffId?.staffId,
    //       name:this.admission.staffId?.name,
    //       surname:this.admission.staffId?.surname,
    //     }
    //   });
    // });
   
  }


  getAdmission(): void {
     this.setAdmissionFields();
          this.admissionService.updateAdmission(this.admission.admissionId, this.admission).subscribe({
            next: (data) => {
              
              this.goToAdmissionList();
            },
            error: (error) => console.log(error)
          });
          
        }


  goToAdmissionList(){
    this.route.navigate(['/appointment-patient']);
  }

  getOrganization(): void {
    this.organizationService.getOrganization().subscribe(data => {
      this.organizations = data;
    });
  }
              
  onOrganizationChange(event: Event): void{
    if(event) {
      console.log(event)
  }
  
  const organizationId = this.updateorganizationForm.get('organizationId')?.value;
    
    this.staffService.getStaffByOrganization(organizationId).subscribe(
      data => {
        this.staffs = data;
      },
      error => {
        console.error('Error fetching districts:', error);
      }
    );

}

  setAdmissionFields(){

    this.patient.tcNo = this.updateadmissionForm.get('tcNo')?.value;
    this.patient.firstName = this.updateadmissionForm.get('firstName')?.value;
    this.patient.lastName = this.updateadmissionForm.get('lastName')?.value;
    this.patient.age = this.updateadmissionForm.get('age')?.value;
    this.patient.gender = this.updateadmissionForm.get('gender')?.value;


    const organizationId = this.updateorganizationForm.get('organizationId')?.value;
    const staffId = this.updateorganizationForm.get('staffId')?.value;

    this.admission.admissionDate = this.updateorganizationForm.get('admissionDate')?.value;
    this.admission.admissionType = this.updateorganizationForm.get('admissionType')?.value;
    this.admission.note = this.updateorganizationForm.get('note')?.value;
    this.admission.status = this.updateorganizationForm.get('status')?.value;
    this.admission.organizationId = {organizationId:organizationId,name:''};
    //this.admission.organizationId.name = this.updateorganizationForm.get('organizationId?.name');
    this.admission.staffId = {staffId:staffId, name:'', surname:'', organizationId:organizationId};


  }


}
