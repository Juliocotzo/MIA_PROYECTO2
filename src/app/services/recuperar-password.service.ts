import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Password } from '../models/Password'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecuperarPasswordService {

  API_URI = 'http://localhost:3000/api';
  //API_URI = 'http://10.56.207.206:3000/api';

  
  constructor(private http: HttpClient) { }

  updatePassword(recuperarPassword: Password, correo: string): Observable<Password> {
    console.log(`${this.API_URI}/recuperarPassword?correo=` + correo);
    return this.http.put(`${this.API_URI}/recuperarPassword?correo=` + correo, recuperarPassword);
  }
}
