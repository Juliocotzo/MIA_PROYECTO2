import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ReportesService {

  API_URI = 'http://localhost:3000/api';
  //API_URI = 'http://10.56.207.206:3000/api';

  
  constructor(private http: HttpClient) { }

  getReporte1(){
    return this.http.get(`${this.API_URI}/reporte1`);
  }

  getReporte2(fecha2:string){
    return this.http.get(`${this.API_URI}/reporte2?fecha_nacimiento=${fecha2}`);
  }

  getReporte3(fecha3:string){
    return this.http.get(`${this.API_URI}/reporte3?fecha_nacimiento=${fecha3}`);
  }

  getReporte4(){
    return this.http.get(`${this.API_URI}/reporte4`);
  }

  getReporte5(){
    return this.http.get(`${this.API_URI}/reporte5`);
  }

  getReporte6(){
    return this.http.get(`${this.API_URI}/reporte6`);
  }

  getReporte7(){
    return this.http.get(`${this.API_URI}/reporte7`);
  }

  getReporte8(){
    return this.http.get(`${this.API_URI}/reporte8`);
  }

  getReporte9(fecha9:string){
    return this.http.get(`${this.API_URI}/reporte9?fecha_nacimiento=${fecha9}`);
  }

  getReporte10(cantidad10:string){
    return this.http.get(`${this.API_URI}/reporte10?fecha_nacimiento=${cantidad10}`);
  }


  getReporte11(){
    return this.http.get(`${this.API_URI}/reporte11`);
  }
}
