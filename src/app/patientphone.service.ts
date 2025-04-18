import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PatientPhone } from './patientphone';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PatientphoneService {

  private baseURL = "http://localhost:8080/api/v1"; 

  constructor(private httpClient: HttpClient) {}


  getPatientPhoneList(): Observable<PatientPhone[]>{
    return this.httpClient.get<PatientPhone[]>(`${this.baseURL}/allphone`);
  }


  getPatientPhone(): Observable<PatientPhone[]> {
    return this.httpClient.get<PatientPhone[]>(`${this.baseURL}/createPatientPhone`);
  }
}
