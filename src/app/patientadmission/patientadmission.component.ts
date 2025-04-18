import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AdmissionDTO, newInstanceAdmissionDTO } from '../models/admission-dto.model';
import { PatientadmissionService } from '../patientadmission.service';
import { PatientorganizationService } from '../patientorganization.service';
import { PatientstaffService } from '../patientstaff.service';
import { newInstancePatientDTO, PatientDTO } from '../models/patient-dto.model';
import { PatientService } from '../patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Patientorganization } from '../patientorganization';
import { Patientstaff } from '../patientstaff';

@Component({
  selector: 'app-patientadmission',
  templateUrl: './patientadmission.component.html',
  styleUrl: './patientadmission.component.css'
})
export class PatientadmissionComponent implements OnInit {

  organizations: Patientorganization[] = [];
  staffs: Patientstaff[] = [];
  admissionboolean:boolean=false;

  patientadmissionAddForm!: FormGroup;
  organizationAddForm!: FormGroup;
  admission: AdmissionDTO;
  patient: PatientDTO;
  id!: number;
  constructor(
    private patientService: PatientService,
    private admissionService: PatientadmissionService,
    private organizationService: PatientorganizationService,
    private staffService: PatientstaffService,
    private formBuilder: FormBuilder,
    private router: ActivatedRoute,
    private route: Router


  ) {
    this.patient = newInstancePatientDTO();
    this.admission = newInstanceAdmissionDTO();
    this.patientadmissionAddForm = this.formBuilder.group({ ...this.patient });
    this.organizationAddForm = this.formBuilder.group({ ...this.admission });

  }

  ngOnInit(): void {
    this.getCities();

  }

  saveAdmission(): void {
    this.admissionService.checkAdmission(this.patient.patientId).subscribe({
      next: (result: boolean) => {
        this.admissionboolean = result;
        if(this.admissionboolean){
          alert("Bu hasta için kabul var");
        } else {
          this.admissionService.createAdmission(this.admission).subscribe({
            next: () => this.goToPatientList(),
          });
        }
      }
    });
  }

  goToPatientList() {
    this.route.navigate(['/appointment-patient']);
  }

  getCities(): void {
    this.organizationService.getOrganization().subscribe(data => {
      this.organizations = data;
    });
  }

  onOrganizationChange(event: Event): void {
    if (event) {
      console.log(event)
    }

    const organizationId = this.organizationAddForm.get('organizationId')?.value;
    this.staffService.getStaffByOrganization(organizationId).subscribe(
      data => {
        this.staffs = data;
      },
      error => {
        console.error('Error fetching staffs:', error);
      }
    );

    console.log("tester2");

  }

  getPatient() {
    const tcNo = this.patientadmissionAddForm.get('tcNo')?.value;
    
        if (tcNo) {
          this.patientService.getPatientByTc(tcNo).subscribe({
            next: (result: PatientDTO) => {
              this.patient = result;
            },
            
            error: () => {
              console.error('Hasta bulunamadı');
            },
            complete:() => {
              this.patientadmissionAddForm.patchValue(this.patient);
            },
          });
          
        } 
  }

  onSubmit() {
    this.setAdmissionFields();
    this.saveAdmission();
  }

  setAdmissionFields() {
    const organizationId = this.organizationAddForm.get('organizationId')?.value;
    const staffId = this.organizationAddForm.get('staffId')?.value;

    this.admission.admissionDate = this.organizationAddForm.get('admissionDate')?.value;
    this.admission.admissionType = this.organizationAddForm.get('admissionType')?.value;
    this.admission.note = this.organizationAddForm.get('note')?.value;
    this.admission.status = this.organizationAddForm.get('status')?.value;
    this.admission.organizationId = { organizationId: organizationId, name: '' };
    this.admission.staffId = { staffId: staffId, name: '', surname: '', organizationId: organizationId };
    this.admission.patientId = this.patient;

  }
}
