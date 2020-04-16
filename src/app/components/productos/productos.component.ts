import { CategoriasService } from './../../services/categorias.service';
import { ProductosService } from './../../services/productos.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos: any = [];
  categorias: any = [];
  constructor(private productosService: ProductosService, private router: Router, private categoriasService : CategoriasService) { }

  ngOnInit() {

    this.productosService.getProductos().subscribe(
      res => {
        console.log(res);
        this.productos = res;
      },
      err => console.log(err)
    );
    this.categoriasService.getCategorias().subscribe(
      res =>{
        //console.log(res);
        this.categorias = res;
        console.log(this.categorias)
      },
      err => console.log(err)
    );
  }

  filtrar: string;
  ordenar: string;

  filtrarProducto(Ordenar, AscDesc) {
    if (Ordenar.value == "Fecha de Publicacion") {
      if (AscDesc.value == "ASC") {
        this.filtrar = "fecha_publicacion";
        this.ordenar = "ASC";
      } else if (AscDesc.value == "DESC") {
        this.filtrar = "fecha_publicacion";
        this.ordenar = "DESC";
      }
    } else if (Ordenar.value == "Puntuacion") {
      if (AscDesc.value == "ASC") {
        this.filtrar = "puntuacion";
        this.ordenar = "ASC";
      } else if (AscDesc.value == "DESC") {
        this.filtrar = "puntuacion";
        this.ordenar = "DESC";
      }
    } else if (Ordenar.value == "Precio") {
      if (AscDesc.value == "ASC") {
        this.filtrar = "precio";
        this.ordenar = "ASC";
      } else if (AscDesc.value == "DESC") {
        this.filtrar = "precio";
        this.ordenar = "DESC";
      }
    }

    if(this.categoria == null){
      this.productosService.getProductoFiltrado(this.filtrar,this.ordenar).subscribe(
        res => {
          console.log(res);
          console.log(this.categoria);
          this.productos = res;
        },
        err => console.log(err)
      );
    }else{
      this.productosService.getProductoFiltradoCategoria(this.filtrar,this.ordenar,this.categoria).subscribe(
        res => {
          console.log(res);
          console.log(this.categoria);
          this.productos = res;
        },
        err => console.log(err)
      );
    }
    

  }

  categoria: string;

  filtrarProductoCategoria(categoria){
    console.log(categoria);
    this.categoria = categoria;

    this.productosService.getProductoCategoria(this.categoria).subscribe(
      res => {
        console.log(res);
        this.productos = res;
      },
      err => console.log(err)
    );
  }

  todos(){
    this.productosService.getProductos().subscribe(
      res => {
        console.log(res);
        this.productos = res;
      },
      err => console.log(err)
    );
    this.categoria = null;
  }

}
