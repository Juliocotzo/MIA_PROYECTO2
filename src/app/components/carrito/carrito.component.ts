import { CarritoService } from './../../services/carrito.service';
import { Component, OnInit } from '@angular/core';
import { Auth } from '../../models/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private carritoServices: CarritoService, private router: Router) { }
  carritoID: any = [];
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
      if (this.userLocalStorage[0].tipo_usuario == "cliente") {
        this.carritoServices.getCarritoUsuario(this.userLocalStorage[0].id_usuario)
          .subscribe(
            res => {
              this.carritoID = res;
              console.log(this.carritoID);
              this.total();
            },
            err => console.log(err)
          );
      } else {
        console.log("ACCESO DENEGADO");
        this.router.navigate(['/error']);
      }
    } else {
      console.log("ACCESO DENEGADO");
      this.router.navigate(['/error']);
    }
  }

  totalCarrito: number = 0;

  total() {
    this.carritoID.forEach(element => {
      this.totalCarrito = element.CANTIDAD * element.PRECIO + this.totalCarrito;
      console.log(this.totalCarrito);
    });
  }

}
