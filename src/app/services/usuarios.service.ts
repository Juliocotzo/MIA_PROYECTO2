
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Usuario} from '../models/Usuario'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {


  API_URI = 'http://localhost:3000/api';
  //API_URI = 'http://10.56.207.206:3000/api';

  
  constructor(private http: HttpClient) { }

  getUsuarios(){
    return this.http.get(`${this.API_URI}/usuarios`);
  }

  getUsuario(id: string){
    return this.http.get(`${this.API_URI}/usuarios/${id}`);
  }

  saveUsuario(usuario : Usuario){
    return this.http.post(`${this.API_URI}/usuarios`,usuario);
  }

  updateUsuario(id: string|number,updatedUsuario : Usuario): Observable<Usuario>{
    return this.http.put(`${this.API_URI}/usuarios/${id}`, updatedUsuario);
  }

}
