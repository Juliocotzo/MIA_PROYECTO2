import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AddProductsCarrito } from '../models/addProductsCarrito'
@Injectable({
  providedIn: 'root'
})
export class AddProductsCarritoService {

  API_URI = 'http://localhost:3000/api';
  //API_URI = 'http://10.56.207.206:3000/api';

  
  
  constructor(private http: HttpClient) { }

  saveProductCarrito(addProductCarrito: AddProductsCarrito) {
    return this.http.post(`${this.API_URI}/carritoAdd`, addProductCarrito);
  }
}
