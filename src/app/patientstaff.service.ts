import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Patientstaff } from './patientstaff';

@Injectable({
  providedIn: 'root'
})
export class PatientstaffService {

  private baseURL = "http://localhost:8080/api/v1"; 
  
  constructor(private httpClient: HttpClient) { }

  // getPatientPhoneList(): Observable<PatientPhone[]>{
  //   return this.httpClient.get<PatientPhone[]>(`${this.baseURL}/allphone`);
  // }

  // getPatientStaffList(): Observable<Patientstaff[]>{
  //   return this.httpClient.get<Patientstaff[]>(`${this.baseURL}/allstaff`)
  // }
  
  // getPatientStaff(): Observable<Patientstaff[]>{
  //   return this.httpClient.get<Patientstaff[]>(`${this.baseURL}/createpatientstaff`)
  // }

  getStaffByOrganization(organizationId:number):Observable<Patientstaff[]>{
    return this.httpClient.get<Patientstaff[]>(`${this.baseURL}/patientorganization/${organizationId}`);
  }

  // getDistrictsByCity(cityId: number): Observable<District[]> {
  //   return this.httpClient.get<District[]>(`${this.baseURL}/cities/${cityId}`);
  // }
}
    