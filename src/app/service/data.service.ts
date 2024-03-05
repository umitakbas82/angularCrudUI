import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  http=inject(HttpClient)
  apiUrl="https://localhost:7057/api/"
  constructor(public response:HttpClient) { }

  getAllData(){
    return this.http.get(this.apiUrl+"Employee")
  }
}
