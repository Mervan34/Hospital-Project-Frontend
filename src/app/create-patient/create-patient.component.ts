import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { CityService } from '../city.service';
import { DistrictService } from '../district.service';

import { City } from '../city';
import { District } from '../district';
import { newInstancePatient, Patient } from '../patient';
import { Router } from '@angular/router';
import { PatientService } from '../patient.service';
import { PatientphoneService } from '../patientphone.service';
import { newInstancePatientPhone, PatientPhone } from '../patientphone';
import { newInstancePatientDTO, PatientDTO } from '../models/patient-dto.model';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  cities: City[] = [];
  districts: District[] = [];

  patientAddForm!: FormGroup;
  patientphoneAddForm!: FormGroup;
  patient: PatientDTO;
  dtoPatientPhone: PatientPhone;


  constructor(
    private cityService: CityService,
    private districtService: DistrictService,
    private patientService: PatientService,
    private patientphoneService: PatientphoneService,
    private formBuilder: FormBuilder,
    private router: Router

  ) {
 
    this.patient = newInstancePatientDTO();
    this.dtoPatientPhone = newInstancePatientPhone();
    this.patientAddForm = this.formBuilder.group({ ...this.patient });
    this.patientphoneAddForm = this.formBuilder.group({...this.dtoPatientPhone });
    
  }

  ngOnInit(): void {
    this.getCities();
  }

  savePatient(): void {
    this.patientService.createPatient(this.patient).subscribe({
      next: () => this.goToPatientList(),
      
    });
  }

  getCities(): void {
    this.cityService.getCities().subscribe(data => {
      this.cities = data;
    });
  }

  add() {
    console.log(this.patientAddForm.value);
    if (this.patientAddForm.valid) {
      this.patient = Object.assign({}, this.patientAddForm.value);
    }
    this.setFields();
    this.savePatient();

  }


  goToPatientList() {
    this.router.navigate(['/patients']);
  }


  onCityChange(event: Event): void {
    if (event) {
      console.log(event)
    }

    const cityId = this.patientAddForm.get('city')?.value;
    this.districtService.getDistrictsByCity(cityId).subscribe(
      data => {
        this.districts = data;
      },
      error => {
        console.error('Error fetching districts:', error);
      }
    );

    console.log("tester2");

  }

 
  setFields() {
    // this.patient = this.patientAddForm.value;
    const cityId = this.patientAddForm.get('city')?.value;
    const districtId = this.patientAddForm.get('district')?.value;
    const mobilephone =this.patientphoneAddForm.get('mobilephone')?.value;
    const homephone = this.patientphoneAddForm.get('homephone')?.value;
    
    this.patient.gender=this.patientAddForm.get('gender')?.value;
    this.patient.birthPlace=this.patientAddForm.get('birthPlace')?.value;
    this.patient.tcNo=this.patientAddForm.get('tcNo')?.value;
    this.patient.firstName = this.patientAddForm.get('firstName')?.value;
    this.patient.lastName = this.patientAddForm.get('lastName')?.value;
    this.patient.age = this.patientAddForm.get('age')?.value;
    this.patient.address = this.patientAddForm.get('address')?.value;
    this.patient.city = {mervancityid: cityId, name: ''};
    this.patient.district = {mervandistrictid: districtId, name: '', cityId:cityId};
    //this.patient.listPhone = {id:0 , mobilephone: mobilephone , homephone: homephone , patientid:0}
    
    const entityPhone: PatientPhone = newInstancePatientPhone();
    entityPhone.homephone = this.patientphoneAddForm.get('homephone')?.value;
    entityPhone.mobilephone = this.patientphoneAddForm.get('mobilephone')?.value;
    this.patient.entityPatientPhone = entityPhone;
  }

  
}


