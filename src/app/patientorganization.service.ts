import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patientorganization } from './patientorganization';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientorganizationService {

  private baseURL = "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) { }


  // getPatientOrganizationList(): Observable<Patientorganization[]>{
  //   return this.httpClient.get<Patientorganization[]>(`${this.baseURL}/allorganization`)
  // }
  
  // getPatientOrganization(): Observable<Patientorganization[]>{
  //   return this.httpClient.get<Patientorganization[]>(`${this.baseURL}/createorganization`)
  // }

  getOrganization():Observable<Patientorganization[]>{
    return this.httpClient.get<Patientorganization[]>(`${this.baseURL}/allorganization`);
  }


  getAppointmentOrganization():Observable<Patientorganization[]>{
    return this.httpClient.get<Patientorganization[]>(`${this.baseURL}/allappointmentorganization`);
  }



 

}
