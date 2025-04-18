import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { DistrictService } from '../district.service';
import { City } from '../city';
import { District } from '../district';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-patientform',
  templateUrl: './patientform.component.html',
  styleUrls: ['./patientform.component.css']
})
export class PatientFormComponent implements OnInit {
  cities: City[] = [];
  districts: District[] = [];
  form: FormGroup;

  constructor(private fb: FormBuilder, private cityService: CityService, private districtService: DistrictService) {
    this.form = this.fb.group({
      selectedCityId: [''],
      selectedDistrictId: ['']
    });
  }


  
  

  ngOnInit(): void {
    this.getCities();
    
    // this.form.get('selectedCityId')?.valueChanges.subscribe(cityId => {
    //   if (cityId) {
        
    //     this.districtService.getDistrictsByCity(cityId).subscribe(
    //       data => {
    //         this.districts = data;
    //       },
    //       error => {
    //         console.error('Error fetching districts:', error);
    //       }
    //     );
    //   } else {
    //     this.districts = [];
    //   }
    // });
  }

  getCities(): void {
    this.cityService.getCities().subscribe(data => {
      this.cities = data;
    });
   
  }
}
