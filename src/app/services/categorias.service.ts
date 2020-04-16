import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Categoria } from '../models/Categoria';
@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  API_URI = 'http://localhost:3000/api';
  //API_URI = 'http://10.56.207.206:3000/api';

  
  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get(`${this.API_URI}/categorias`);
  }

  getCategoria(id: string) {
    return this.http.get(`${this.API_URI}/categorias/${id}`);
  }

  saveCategoria(categoria: Categoria) {
    return this.http.post(`${this.API_URI}/categorias`,categoria);
  }

  
}
