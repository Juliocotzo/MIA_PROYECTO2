import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { correoI } from '../models/confirmCorreo'
import { Observable } from 'rxjs';
import {ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ConfirmService {

  API_URI = 'http://localhost:3000/api';
  //API_URI = 'http://10.56.207.206:3000/api';
  

  constructor(private http: HttpClient, private activeRoute : ActivatedRoute) { }

  updateUsuario(updatedCorreo: correoI,id : string): Observable<correoI> {
    const params = this.activeRoute.snapshot.params;
    console.log(`${this.API_URI}/confirm/` + id);

    return this.http.put(`${this.API_URI}/confirm/` + id, updatedCorreo);
  }
}

/*updateUsuario(updatedCorreo: correoI): Observable<correoI> {
    const params = this.activeRoute.snapshot.params;
    console.log(`${this.API_URI}/confirm/` + window.location.href);

    return this.http.put(`${this.API_URI}` + window.location.pathname, updatedCorreo);
  }*/
