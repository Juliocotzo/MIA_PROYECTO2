import { Producto } from './../../models/Producto';
import { CategoriaIDService } from './../../services/categoria-id.service';
import { Categoria } from './../../models/Categoria';
import { ProductosService } from './../../services/productos.service';
import { CategoriasService } from './../../services/categorias.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../models/auth';

@Component({
  selector: 'app-mis-productos',
  templateUrl: './mis-productos.component.html',
  styleUrls: ['./mis-productos.component.css']
})
export class MisProductosComponent implements OnInit {

  productos: any = [];
  categorias: any = [];
  categoriaRes: any = [];
  constructor(private MisproductosService: ProductosService, private router: Router, private categoriasService: CategoriasService, private categoriaID: CategoriaIDService) { }

  userLocalStorage: Auth = {
    id_usuario: 1,
    correo: '',
    password: '',
    validacion: 0,
    tipo_usuario: ''
  };

  producto: Producto = {
    id_producto: 1,
    codigo_producto: '',
    imagen: '',
    descripcion: '',
    precio: 1,
    fecha_publicacion: new Date(),
    cantidad_disponible: 1,
    usuario_id_usuario: 1,
    categoria_id_categoria: 1,
  };

  categoria: Categoria = {
    id_categoria: 1,
    nombre: '',
    descripcion: ''
  };

  categoriaNueva: Categoria = {
    id_categoria: 1,
    nombre: '',
    descripcion: ''
  };



  ngOnInit() {
    if (localStorage.getItem("usuario") != null) {
      this.userLocalStorage = JSON.parse(localStorage.getItem("usuario"));
      if (this.userLocalStorage[0].tipo_usuario == "cliente") {
        this.MisproductosService.getMisProductos(this.userLocalStorage[0].id_usuario).subscribe(
          res => {
            console.log(res);
            this.productos = res;
          },
          err => console.log(err)
        );
    
        this.categoriasService.getCategorias().subscribe(
          res => {
            //console.log(res);
            this.categorias = res;
            console.log(this.categorias)
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

  registrarProducto() {
    /*delete this.categoria.id_categoria;

    this.categoriasService.saveCategoria(this.categoria)
      .subscribe(
        res => {
          this.categoria = res;
          console.log(this.categoria);
          alert("Se ingreso una nueva categoria");

        },
        err => console.error(err)
      );*/
    /*delete this.producto.id_producto;
    this.producto.usuario_id_usuario = this.userLocalStorage[0].id_usuario;
    this.producto.categoria_id_categoria = this.categoriaRes[0].id_categoria;
    console.log(this.producto);*/



  }

  registrarProducto1() {
    this.categoriaID.getCategoriaID(this.categoria.nombre)
      .subscribe(
        res => {
          this.categoriaRes = res;
          console.log(this.categoriaRes[0]);

          delete this.producto.id_producto;
          this.producto.usuario_id_usuario = this.userLocalStorage[0].id_usuario;
          this.producto.categoria_id_categoria = this.categoriaRes[0].id_categoria;
          console.log(this.producto);
          this.MisproductosService.saveProducto(this.producto)
            .subscribe(
              res => {
                console.log(res);
                alert("El producto fue registrado");
                this.ngOnInit();
              }, err => console.log(err)
            );

        },
        err => console.log(err)
      );
  }

  agregarCategoria() {
    this.categoriaID.getCategoriaID(this.categoriaNueva.nombre)
      .subscribe(
        res => {
          this.categoriaRes = res;
          console.log(this.categoriaRes[0]);
          if (this.categoriaRes[0] == null) {
            delete this.categoriaNueva.id_categoria;
            this.categoriasService.saveCategoria(this.categoriaNueva)
              .subscribe(
                res => {
                  this.categoria = res;
                  console.log(this.categoria);
                  alert("Se ingreso una nueva categoria");
                  this.ngOnInit();

                },
                err => console.error(err)
              );
          } else {
            alert("Categoria ya existe");
          }


        },
        err => console.log(err)
      );
  }

}
