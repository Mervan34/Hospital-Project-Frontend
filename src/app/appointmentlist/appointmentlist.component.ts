import { Component, OnInit } from '@angular/core';
import { Dtoappointment } from '../models/dtoappointment';
import { AppointmentService } from '../appointment.service';
import { Router } from '@angular/router';
import { PatientorganizationService } from '../patientorganization.service';
import { OrganizationDTO } from '../models/organization-dto.model';

@Component({
  selector: 'app-appointmentlist',
  templateUrl: './appointmentlist.component.html',
  styleUrl: './appointmentlist.component.css'
})
export class AppointmentlistComponent implements OnInit{

  appointments:Dtoappointment[] = [];
  organizations:OrganizationDTO[] = [];
  organizationId:number =1;

  constructor(
    private appointmentService:AppointmentService,
    private organizationService: PatientorganizationService,
    // private router:Router,
  ){

  }


  ngOnInit(): void {
    this.getAppointments();
  }

  private getAppointments(){
    this.appointmentService.AppointmentList().subscribe(data =>{
      this.appointments = data.sort((a,b) => a.appointmentId-b.appointmentId);
    })
  }

  // private getPatients() {
  //   this.patientService.getPatientList().subscribe(data => {
  //     this.patients = data.sort((a, b) => a.patientId - b.patientId);
  //   });
  // }


  // this.districtService.getDistrictsByCity(cityId).subscribe(
  //   data => {
  //     this.districts = data;
  //   },
  //   
  // );

  // console.log("tester2");
  // getAppointments():void{
    
  //   this.appointmentService.AppointmentByOrganization(this.organizationId).subscribe(
  //     data => {
  //       this.appointments = data;
  //     },
      
  //   );
  // }

}
