import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { newInstancePatient, Patient } from '../patient';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'console';
import { City, newInstanceCity } from '../city';
import { District, newInstanceDistrict } from '../district';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { CityService } from '../city.service';
import { DistrictService } from '../district.service';
import { newInstancePatientPhone, PatientPhone } from '../patientphone';
import { newInstancePatientDTO, PatientDTO } from '../models/patient-dto.model';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrl: './update-patient.component.css'
})

export class UpdatePatientComponent implements OnInit {
  cities: City[] = [];
  districts: District[] = [];
  //form: FormGroup  ;
  id! :number;
  

  updateAddForm:FormGroup;
  patientphoneAddForm!: FormGroup;
  patient: PatientDTO;
  dtoPatientPhone: PatientPhone;
  //patient:Patient = newInstancePatient();

  //=new FormGroup({
  //   firstName :new  FormControl(''),
  //   lastName : new FormControl(''),
  //   age : new FormControl(''),
  //   address : new FormControl(''),
  //   city : new FormControl(''),
  //   district : new FormControl('') 

  // });

  constructor(
    //private fb: FormBuilder, 
    private cityService: CityService, 
    private districtService: DistrictService,
    private patientService: PatientService,
    private formBuilder: FormBuilder,
    private router:ActivatedRoute,
    private route:Router

  ) {
 
    this.patient = newInstancePatientDTO();
    this.dtoPatientPhone = newInstancePatientPhone();
    this.updateAddForm = this.formBuilder.group({ ...this.patient });
    this.patientphoneAddForm = this.formBuilder.group({...this.dtoPatientPhone });
  }
  
  ngOnInit():void {
    this.getCities();
    
    this.patient.patientId = this.router.snapshot.params['id'];
    if (!this.patient.patientId) {
      console.error('Patient ID is undefined.');
      return;
    }
    this.patientService.getPatientById(this.patient.patientId).subscribe(
      data => {

        const newPatientDTO = newInstancePatientDTO(); 
        Object.assign(newPatientDTO, data);
        
        newPatientDTO.city = data.city ? { ...data.city } : newInstanceCity();
        newPatientDTO.district = data.district ? { ...data.district } : newInstanceDistrict();
        newPatientDTO.entityPatientPhone = newPatientDTO.entityPatientPhone ? { ...newPatientDTO.entityPatientPhone } : newInstancePatientPhone();
        console.log(newPatientDTO.city.mervancityid )
        this.patient=newPatientDTO;
        

        this.patient.entityPatientPhone.mobilephone=newPatientDTO.entityPatientPhone.mobilephone;
        this.patient.entityPatientPhone.homephone=newPatientDTO.entityPatientPhone.homephone;
        
        this.updateAddForm.patchValue(this.patient);
        this.updateAddForm.setValue({
          patientId: this.patient.patientId,
          tcNo:this.patient.tcNo,
          firstName: this.patient.firstName,
          lastName: this.patient.lastName,
          birthDate:this.patient.birthDate,
          birthPlace:this.patient.birthPlace,
          age: this.patient.age,
          gender:this.patient.gender,
          address: this.patient.address,
          entityPatientPhone: this.patient.entityPatientPhone,
          city: {
            mervancityid: this.patient.city?.mervancityid,
            name: this.patient.city?.name,
          },
          district: {
            mervandistrictid: this.patient.district?.mervandistrictid,
            name: this.patient.district?.name,
            cityId: this.patient.district?.cityId,
          }
        });

        this.dtoPatientPhone.mobilephone = newPatientDTO.entityPatientPhone.mobilephone;
        this.dtoPatientPhone.homephone = newPatientDTO.entityPatientPhone.homephone;
        
        this.patientphoneAddForm.patchValue(this.dtoPatientPhone);
        console.log(this.patient.entityPatientPhone.mobilephone);

        
        
        // this.updateAddForm.patchValue(this.patient);
        console.log(this.patient.firstName);
      },
      error => {
        console.error('Error fetching districts:', error);
      }
    );

  }

  onSubmit(): void {
    this.setFields();
          this.patientService.updatePatient(this.patient.patientId, this.patient).subscribe({
            next: (data) => {
              
              this.goToPatientList();
            },
            error: (error) => console.log(error)
          });
          
        }

    
      
      add(){

      }

      goToPatientList(){
        this.route.navigate(['/patients']);
      }
      
      getCities(): void {
        this.cityService.getCities().subscribe(data => {
          this.cities = data;
        });
      }
                  
      onCityChange(event: Event): void{
        if(event) {
          console.log(event)
      }           

    console.log(this.updateAddForm.get('city')?.value) 
    const cityId = this.updateAddForm.get('city')?.value;
    
    
    console.log("tester2");
    this.districtService.getDistrictsByCity(cityId).subscribe(
      data => {
        this.districts = data;
      },
      error => {
        console.error('Error fetching districts:', error);
      }
    );
    
  }

    setFields(){
      
      //this.patient=this.updateAddForm.value;
    const cityId = this.updateAddForm.get('city')?.value;
    const districtId = this.updateAddForm.get('district')?.value;
    this.patient.firstName = this.updateAddForm.get('firstName')?.value;
    this.patient.lastName = this.updateAddForm.get('lastName')?.value;
    this.patient.age = this.updateAddForm.get('age')?.value;
    this.patient.address = this.updateAddForm.get('address')?.value;
    this.patient.city = {mervancityid: cityId, name: ''};
    this.patient.city.name=this.updateAddForm.get('city?.name')?.value;
    this.patient.district = {mervandistrictid: districtId, name: '', cityId:cityId};
      
    const entityPhone: PatientPhone = newInstancePatientPhone();
    entityPhone.homephone = this.patientphoneAddForm.get('homephone')?.value;
    entityPhone.mobilephone = this.patientphoneAddForm.get('mobilephone')?.value;
    this.patient.entityPatientPhone = entityPhone;
    } 
  }
