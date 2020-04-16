import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  API_URI = 'http://localhost:3000/api';
  //API_URI = 'http://10.56.207.206:3000/api';

  
  constructor(private http: HttpClient) { }

  getEmployees(){
    return this.http.get(`${this.API_URI}/usuarios`);
  }

  getEmployee(id: string){
  }
}
