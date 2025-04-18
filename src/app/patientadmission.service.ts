import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdmissionDTO } from './models/admission-dto.model';
import { Patientadmission } from './patientadmission';
import { PatientDTO } from './models/patient-dto.model';

@Injectable({
  providedIn: 'root'
})
export class PatientadmissionService {

  private baseURL = "http://localhost:8080/api/v1";

  constructor(private httpClient: HttpClient) { }

  getAdmissionList(): Observable<AdmissionDTO[]>{
    return this.httpClient.get<AdmissionDTO[]>(`${this.baseURL}/patientsadmission`);
  }
  
  createAdmission(admission: AdmissionDTO): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/createAdmission`,admission);
  }

  checkAdmission(patientId:number): Observable<boolean>{
    return this.httpClient.get<boolean>(`${this.baseURL}/check/${patientId}`);
  }

  getAdmissionById(admissionId:number): Observable<AdmissionDTO>{
    return this.httpClient.get<AdmissionDTO>(`${this.baseURL}/admissionbyid/${admissionId}`);
  }

  updateAdmission(admissionId: number, admission: AdmissionDTO): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/updateadmission/${admissionId}`,admission);
  }


  deleteAdmission(admissionId: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deleteadmission/${admissionId}`);
  }

  // getPatientByTc(tcNo:number):Observable<PatientDTO>{
  //   return this.httpClient.get<PatientDTO>(`${this.baseURL}/getPatientByTc/${tcNo}`);
  // }



 
}
