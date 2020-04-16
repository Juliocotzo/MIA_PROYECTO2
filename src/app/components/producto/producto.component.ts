import { AddProductsCarrito } from './../../models/addProductsCarrito';
import { Comentario } from './../../models/comentario';
import { Component, OnInit } from '@angular/core';
import { ProductosService } from './../../services/productos.service';
import { ActivatedRoute } from '@angular/router';
import { ComentariosService } from './../../services/comentarios.service'
import { Auth } from '../../models/auth';
import { AddCarritoService } from './../../services/add-carrito.service';

import { AddProductsCarritoService } from '../../services/add-products-carrito.service'

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  constructor(private productosService: ProductosService, private activeRoute: ActivatedRoute, private comentarioService: ComentariosService, private addCarrito: AddCarritoService, private addProductCarrito: AddProductsCarritoService) { }

  producto: any = [];
  comentarios: any = [];

  carritoID: any = {};

  userLocalStorage: Auth = {
    id_usuario: 1,
    correo: '',
    password: '',
    validacion: 0,
    tipo_usuario: ''
  };

  logueado: boolean = false;
  cantidad: number;

  comentario: Comentario = {
    id_comentario: 0,
    valoracion: 0,
    fecha: new Date(),
    titulo: '',
    descripcion: '',
    usuario_id_usuario: 0,
    producto_id_producto: 0
  };


  agregarProductI: AddProductsCarrito = {
    cantidad: 0,
    carrito_id_carrito: 0,
    producto_id_producto: 0
  };

  ngOnInit() {
    this.userLocalStorage = JSON.parse(localStorage.getItem("usuario"));
    const params = this.activeRoute.snapshot.params;
    if (localStorage.getItem("usuario") != null) {
      this.logueado = true;
    }
    if (params.id) {
      this.productosService.getProducto(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.producto = res;
          },
          err => console.log(err)
        )
      this.comentarioService.getComentariosID(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.comentarios = res;
            console.log(this.comentarios);
          },
          err => console.log(err)
        )
    }
  }

  nuevoComentario() {
    delete this.comentario.id_comentario;
    const params = this.activeRoute.snapshot.params;
    this.comentario.producto_id_producto = +params.id;
    this.comentario.usuario_id_usuario = this.userLocalStorage[0].id_usuario
    this.comentario.valoracion = +this.comentario.valoracion;
    console.log(this.comentario);
    this.comentarioService.saveComentariosID(this.comentario)
      .subscribe(
        res => {
          console.log(res);
          alert("El Comentario fue registrado");
          this.ngOnInit();
        }, err => console.log(err)
      );
  }


  agregarCarrito() {
    console.log(this.userLocalStorage[0].id_usuario);
    this.addCarrito.getCarrito(this.userLocalStorage[0].id_usuario)
      .subscribe(res => {
        //console.log(res);
        this.carritoID = res;
        console.log(this.cantidad);
        console.log(this.carritoID.ID_CARRITO);
        console.log(this.producto.ID_PRODUCTO);
        this.agregarProductI.cantidad = this.cantidad;
        this.agregarProductI.carrito_id_carrito = this.carritoID.ID_CARRITO;
        this.agregarProductI.producto_id_producto = this.producto.ID_PRODUCTO;
        this.addProductCarrito.saveProductCarrito(this.agregarProductI)
          .subscribe(
            res => {
              console.log(res);
            }, err => console.log(err)
          );

      }, err => console.log(err));
  }
}
