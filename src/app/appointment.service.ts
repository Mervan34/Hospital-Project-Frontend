import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { Observable } from 'rxjs';
import { Dtoappointment } from './models/dtoappointment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private baseURL = "http://localhost:8080/api/v1"; 

  constructor(private httpClient: HttpClient) { }

  createAppointment(appointment: Dtoappointment): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/createAppointment`,appointment);
  }

  AppointmentByOrganization(organizationId:number):Observable<Dtoappointment>{
    return this.httpClient.get<Dtoappointment>(`${this.baseURL}/appointment/${organizationId}`)
  }
  
  AppointmentList(): Observable<Dtoappointment[]>{
    return this.httpClient.get<Dtoappointment[]>(`${this.baseURL}/appointmentlist`);
  }

  // getAdmissionList(): Observable<AdmissionDTO[]>{
  //   return this.httpClient.get<AdmissionDTO[]>(`${this.baseURL}/patientsadmission`);
  // }


  // getPatientById(patientId:number):Observable<Patient>{
  //   return this.httpClient.get<Patient>(`${this.baseURL}/byid/${patientId}`);
  // }

  // createPatient(patient: PatientDTO): Observable<Object>{
  //   return this.httpClient.post(`${this.baseURL}/createPatient`,patient);
  // }
  

  // createAdmission(admission: AdmissionDTO): Observable<Object>{
  //   return this.httpClient.post(`${this.baseURL}/createAdmission`,admission);
  // }

  getAppointmentList(): Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseURL}/allappointmentorganization`);
  }

  getAppointmentByOrganization(organizationId:number): Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseURL}/appointment/${organizationId}`)
  }

  // getDistrictsByCity(cityId: number): Observable<District[]> {
  //   return this.httpClient.get<District[]>(`${this.baseURL}/cities/${cityId}`);
  // }

 
  // getPatientById(patientId:number):Observable<Patient>{
  //   return this.httpClient.get<Patient>(`${this.baseURL}/byid/${patientId}`);
  // }
}
