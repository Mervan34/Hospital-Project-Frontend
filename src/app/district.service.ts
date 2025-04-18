import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { District } from './district'; // District modelinizi import edin


@Injectable({
  providedIn: 'root'
})

export class DistrictService {

  private baseURL = "http://localhost:8080/api/v1/districts"; 

  constructor(private httpClient: HttpClient) { }

  getDistrictsByCity(cityId: number): Observable<District[]> {
    return this.httpClient.get<District[]>(`${this.baseURL}/cities/${cityId}`);
  }

  
}
