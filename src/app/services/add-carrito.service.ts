import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AddCarrito } from '../models/addCarrito'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AddCarritoService {

  API_URI = 'http://localhost:3000/api';

  //API_URI = 'http://10.56.207.206:3000/api';

  
  constructor(private http: HttpClient) { }

  getCarritos() {
    return this.http.get(`${this.API_URI}/carritos`);
  }

  getCarrito(id: string) {
    return this.http.get(`${this.API_URI}/carritos/${id}`);
  }

  saveCarrito(addCarrito: AddCarrito) {
    return this.http.post(`${this.API_URI}/carritos`, addCarrito);
  }
}
