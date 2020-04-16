import { Usuario } from '../../models/Usuario';
import { Component, OnInit, HostBinding } from '@angular/core';
import {UsuariosService} from '../../services/usuarios.service';
import { Router } from '@angular/router';
import { Auth } from '../../models/auth';
import {ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form-admin',
  templateUrl: './form-admin.component.html',
  styleUrls: ['./form-admin.component.css']
})
export class FormAdminComponent implements OnInit {
  userLocalStorage: Auth = {
    id_usuario: 1,
    correo: '',
    password: '',
    validacion: 0,
    tipo_usuario: ''
  };

  usuarioAdmin : Usuario = {
    id_usuario: 0,
    nombre: '',
    apellido: '',
    password: '',
    correo: '',
    telefono: '',
    fotografia: '',
    fecha_de_nacimiento: null,
    fecha_de_registro: new Date(10,23,1997),
    direccion: '',
    credito_disponible: 0,
    ganancia_obtenida: 0,
    estado: 1,
    validacion: 0,
    genero_id_genero: 3,
    clase_cliente_id_clase_cliente: Math.floor(Math.random()*5)+1,
    tipo_usuario_id_tipo_usuario: 3,
  }; 

  edit : boolean = false;

  constructor(private usuariosService : UsuariosService, private activeRoute : ActivatedRoute,private router: Router) { }

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

    const params = this.activeRoute.snapshot.params;
    if(params.id){
      this.usuariosService.getUsuario(params.id)
        .subscribe(
          res=>{
            console.log(res);
            this.usuarioAdmin = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  registrarUsuarioAdmin(genero,tipo_usuario){
    delete this.usuarioAdmin.id_usuario;
    if(genero.value.toUpperCase()=="HOMBRE"){
      this.usuarioAdmin.genero_id_genero = 1;
    }else if(genero.value.toUpperCase()=="MUJER"){
      this.usuarioAdmin.genero_id_genero = 2;
    }else{
      this.usuarioAdmin.genero_id_genero = 3;
    }

    if(this.usuarioAdmin.clase_cliente_id_clase_cliente == 1){
      this.usuarioAdmin.credito_disponible = 50000;
    }else if(this.usuarioAdmin.clase_cliente_id_clase_cliente == 2){
      this.usuarioAdmin.credito_disponible = 25000;
    }else if(this.usuarioAdmin.clase_cliente_id_clase_cliente == 3){
      this.usuarioAdmin.credito_disponible = 10000;
    }else if(this.usuarioAdmin.clase_cliente_id_clase_cliente == 4){
      this.usuarioAdmin.credito_disponible = 5000;
    }else if(this.usuarioAdmin.clase_cliente_id_clase_cliente == 5){
      this.usuarioAdmin.credito_disponible = 1000;
    }

    if(tipo_usuario.value.toUpperCase()=="ADMINISTRADOR"){
      this.usuarioAdmin.tipo_usuario_id_tipo_usuario = 1;
    }else if(tipo_usuario.value.toUpperCase()=="HELP DESK"){
      this.usuarioAdmin.tipo_usuario_id_tipo_usuario = 2;
    }else if(tipo_usuario.value.toUpperCase()=="CLIENTE"){
      this.usuarioAdmin.tipo_usuario_id_tipo_usuario = 3;
    }
    console.log(this.usuarioAdmin);
    this.usuariosService.saveUsuario(this.usuarioAdmin)
      .subscribe(
        res=>{
          console.log(res);
          alert("El usuario fue registrado");
        },
        err=>console.error(err)
      )
      //console.log(this.usuario);
  }

}
