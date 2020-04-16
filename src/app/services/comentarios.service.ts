import { Comentario } from './../models/comentario';
import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ComentariosService {

  API_URI = 'http://localhost:3000/api';
  //API_URI = 'http://10.56.207.206:3000/api';
  
  constructor(private http: HttpClient) { }

  getComentariosID(id: string){
    return this.http.get(`${this.API_URI}/comentarios?id_comentarios=${id}`);
  }

  saveComentariosID(Comentario : Comentario){
    return this.http.post(`${this.API_URI}/comentarios`,Comentario);
  }
}
