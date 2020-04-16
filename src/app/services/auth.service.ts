import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from '../models/auth';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  API_URI = 'http://localhost:3000/api';
  //API_URI = 'http://10.56.207.206:3000/api';

  
  constructor(private http: HttpClient) { }

  getUsuario(correo: string) {
    console.log(this.API_URI);
    return this.http.get(`${this.API_URI}/auth?usuario=${correo}`);
  }
}
