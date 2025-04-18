import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Patient } from './patient';
import { PatientDTO } from './models/patient-dto.model';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL = "http://localhost:8080/api/v1";
  
  constructor(private httpClient: HttpClient) { }

  getPatientList(): Observable<PatientDTO[]>{
    return this.httpClient.get<PatientDTO[]>(`${this.baseURL}/patients`);
  }

  createPatient(patient: PatientDTO): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/createPatient`,patient);
  }

  getPatientById(patientId:number):Observable<Patient>{
    return this.httpClient.get<Patient>(`${this.baseURL}/byid/${patientId}`);
  }

  updatePatient(patientId: number, patient: PatientDTO): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/update/${patientId}`,patient);
  }

  deletePatient(patientId:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${patientId}`)
  }

  getPatientByTc(tcNo:string):Observable<PatientDTO>{
    return this.httpClient.get<PatientDTO>(`${this.baseURL}/getPatientByTc/${tcNo}`);
  }


  // getPatientDtoById(patientId:number):Observable<PatientDTO>{
  //   return this.httpClient.get<PatientDTO>(`${this.baseURL}/getPatientByTc/${patientId}`)
  // }

}
