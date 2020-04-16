import { Component, OnInit } from '@angular/core';
import { ReportesService } from 'src/app/services/reportes.service';
import { Auth } from '../../models/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {

  constructor(private reporteService: ReportesService,private router: Router) { }
  userLocalStorage: Auth = {
    id_usuario: 1,
    correo: '',
    password: '',
    validacion: 0,
    tipo_usuario: ''
  };

  ngOnInit() {
    if (localStorage.getItem("usuario") != null) {
      this.userLocalStorage = JSON.parse(localStorage.getItem("usuario"));
      if (this.userLocalStorage[0].tipo_usuario == "administrador") {
      } else {
        console.log("ACCESO DENEGADO");
        this.router.navigate(['/error']);
      }
    } else {
      console.log("ACCESO DENEGADO");
      this.router.navigate(['/error']);
    }
  }

  reporteInterface: any = [];
  reporteTitle: string = '';
  reporteCategoria1: string = '';
  reporteCategoria2: string = '';

  reporte1() {
    this.reporteTitle = 'Help Desk y su promedio de puntuacion';
    this.reporteCategoria1 = 'Help Desk';
    this.reporteCategoria2 = 'Promedio de puntuacion';
    this.reporteService.getReporte1().subscribe(
      res => {
        console.log(res);
        this.reporteInterface = res;
        console.log(this.reporteInterface);
      },
      err => console.log(err)
    );
  }


  reporte2(fecha2) {
    this.reporteTitle = 'Help Desk de sexo masculino y que hayan nacido arriba de x anio';
    this.reporteCategoria1 = 'Help Desk';
    this.reporteCategoria2 = 'Fecha de Nacimiento';
    this.reporteService.getReporte2(fecha2.value).subscribe(
      res => {
        console.log(res);
        this.reporteInterface = res;
        console.log(this.reporteInterface);
      },
      err => console.log(err)
    );
  }


  reporte3(fecha3) {
    this.reporteTitle = 'Administradores de sexo femenino y que hayan nacido abajo de x anio';
    this.reporteCategoria1 = 'Administradores';
    this.reporteCategoria2 = 'Fecha de Nacimiento';
    this.reporteService.getReporte3(fecha3.value).subscribe(
      res => {
        console.log(res);
        this.reporteInterface = res;
        console.log(this.reporteInterface);
      },
      err => console.log(err)
    );
  }

  reporte4() {
    this.reporteTitle = 'Los clientes que mas ganancia han generado ordenados de mayor a menor';
    this.reporteCategoria1 = 'Clientes';
    this.reporteCategoria2 = 'Ganancias';
    this.reporteService.getReporte4().subscribe(
      res => {
        console.log(res);
        this.reporteInterface = res;
        console.log(this.reporteInterface);
      },
      err => console.log(err)
    );
  }

  reporte5() {
    this.reporteTitle = 'Productos con el promedio de su puntuacion';
    this.reporteCategoria1 = 'Producto';
    this.reporteCategoria2 = 'Promedio de Puntuacion';
    this.reporteService.getReporte5().subscribe(
      res => {
        console.log(res);
        this.reporteInterface = res;
        console.log(this.reporteInterface);
      },
      err => console.log(err)
    );
  }

  reporte6() {
    this.reporteTitle = 'Top 3 de productos mas vendidos';
    this.reporteCategoria1 = 'Producto';
    this.reporteCategoria2 = 'Ventas';
    this.reporteService.getReporte6().subscribe(
      res => {
        console.log(res);
        this.reporteInterface = res;
        console.log(this.reporteInterface);
      },
      err => console.log(err)
    );
  }

  reporte7() {
    this.reporteTitle = 'Top 3 de clientes que  mas productos tenga en su catalogo';
    this.reporteCategoria1 = 'Cliente';
    this.reporteCategoria2 = 'Cantidad de Productos';
    this.reporteService.getReporte7().subscribe(
      res => {
        console.log(res);
        this.reporteInterface = res;
        console.log(this.reporteInterface);
      },
      err => console.log(err)
    );
  }

  reporte8() {
    this.reporteTitle = 'Listado de productos y su categoria';
    this.reporteCategoria1 = 'Producto';
    this.reporteCategoria2 = 'Categoria';
    this.reporteService.getReporte8().subscribe(
      res => {
        console.log(res);
        this.reporteInterface = res;
        console.log(this.reporteInterface);
      },
      err => console.log(err)
    );
  }

  reporte9(fecha9) {
    this.reporteTitle = 'Listado de productos y la cantidad de comentarios asignados en y fecha';
    this.reporteCategoria1 = 'Producto';
    this.reporteCategoria2 = 'Cantidad de Comentarios';
    this.reporteService.getReporte9(fecha9.value).subscribe(
      res => {
        console.log(res);
        this.reporteInterface = res;
        console.log(this.reporteInterface);
      },
      err => console.log(err)
    );
  }

  reporte10(cantidad10) {
    this.reporteTitle = 'Todos los productos que tengan x cantidad disponible';
    this.reporteCategoria1 = 'Producto';
    this.reporteCategoria2 = 'Cantidad';
    this.reporteService.getReporte10(cantidad10.value).subscribe(
      res => {
        console.log(res);
        this.reporteInterface = res;
        console.log(this.reporteInterface);
      },
      err => console.log(err)
    );
  }

  reporte11() {
    this.reporteTitle = 'Top 3 de productos con peor puntuacion';
    this.reporteCategoria1 = 'Producto';
    this.reporteCategoria2 = 'Puntuacion';
    this.reporteService.getReporte11().subscribe(
      res => {
        console.log(res);
        this.reporteInterface = res;
        console.log(this.reporteInterface);
      },
      err => console.log(err)
    );
  }
  
}
