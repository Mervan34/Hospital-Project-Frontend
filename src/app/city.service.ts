import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { City } from './city';
import { District } from './district';

@Injectable({
  providedIn: 'root'
})

export class CityService {

  private baseURL = "http://localhost:8080/api/v1/cities"; 

  constructor(private httpClient: HttpClient) { }

  getCities(): Observable<City[]> {
    return this.httpClient.get<City[]>(`${this.baseURL}/all`);
  }



}
