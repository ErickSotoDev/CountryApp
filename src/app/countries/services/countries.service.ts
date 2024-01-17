import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private apiUrl:string='https://restcountries.com/v3.1/all'

  constructor(private http:HttpClient) {  }

  searchCapital(term:string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.apiUrl}/capital/${term}`);
  }

}
