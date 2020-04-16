import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';
import { Producto } from '../models/Producto';
@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  API_URI = 'http://localhost:3000/api';
  //API_URI = 'http://10.56.207.206:3000/api';

  
  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get(`${this.API_URI}/productos`);
  }

  getProducto(id: string){
    return this.http.get(`${this.API_URI}/productos/${id}`);
  }

  getProductoFiltrado(filtrar: string, ordenar: string){
    return this.http.get(`${this.API_URI}/productos?filtrar=${filtrar}&ordenar=${ordenar}`);
  }

  getProductoFiltradoCategoria(filtrar: string, ordenar: string, categoria:string){
    return this.http.get(`${this.API_URI}/productos?filtrar=${filtrar}&ordenar=${ordenar}&categoria=${categoria}`);
  }

  getProductoCategoria(categoria: string){
    return this.http.get(`${this.API_URI}/productos?categoria=${categoria}`);
  }

  getMisProductos(id: string){
    return this.http.get(`${this.API_URI}/MisProductos/${id}`);
  }

  saveProducto(producto : Producto){
    return this.http.post(`${this.API_URI}/productos`,producto);
  }
}
