
import { Usuario } from './../../models/Usuario';
import { Component, OnInit, HostBinding } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  usuario: Usuario = {
    id_usuario: 0,
    nombre: '',
    apellido: '',
    password: '',
    correo: '',
    telefono: '',
    fotografia: '',
    fecha_de_nacimiento: null,
    fecha_de_registro: new Date(4, 30, 2019),
    direccion: '',
    credito_disponible: 0,
    ganancia_obtenida: 0,
    estado: 1,
    validacion: 0,
    genero_id_genero: 3,
    clase_cliente_id_clase_cliente: Math.floor(Math.random() * 5) + 1,
    tipo_usuario_id_tipo_usuario: 3,
  };

  
  generoID: string = '';

  usuarioEdit: any = {};

  edit: boolean = false;

  constructor(private usuariosService: UsuariosService, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    if (params.id) {
      this.usuariosService.getUsuario(params.id)
        .subscribe(
          res => {
            console.log(res);
            this.usuario = res;
            this.edit = true;
          },
          err => console.log(err)
        )
    }
  }

  registrarUsuario() {
    console.log(this.generoID);
    delete this.usuario.id_usuario;
    if (this.generoID.toUpperCase() == "HOMBRE") {
      this.usuario.genero_id_genero = 1;
    } else if (this.generoID.toUpperCase() == "MUJER") {
      this.usuario.genero_id_genero = 2;
    } else {
      this.usuario.genero_id_genero = 3;
    }

    if (this.usuario.clase_cliente_id_clase_cliente == 1) {
      this.usuario.credito_disponible = 50000;
    } else if (this.usuario.clase_cliente_id_clase_cliente == 2) {
      this.usuario.credito_disponible = 25000;
    } else if (this.usuario.clase_cliente_id_clase_cliente == 3) {
      this.usuario.credito_disponible = 10000;
    } else if (this.usuario.clase_cliente_id_clase_cliente == 4) {
      this.usuario.credito_disponible = 5000;
    } else if (this.usuario.clase_cliente_id_clase_cliente == 5) {
      this.usuario.credito_disponible = 1000;
    }
    console.log(this.usuario);
    this.usuariosService.saveUsuario(this.usuario)
      .subscribe(
        res => {
          console.log(res);
          alert("El usuario fue registrado");
        },
        err => console.error(err)
      )
    //console.log(this.usuario);
  }

  updateUsuario() {
    let temp_id_usuario: number = this.usuario.id_usuario;
    delete this.usuario.id_usuario;
    delete this.usuario.clase_cliente_id_clase_cliente;
    delete this.usuario.credito_disponible;
    delete this.usuario.estado;
    delete this.usuario.fecha_de_registro;
    delete this.usuario.ganancia_obtenida;
    delete this.usuario.genero_id_genero;
    delete this.usuario.tipo_usuario_id_tipo_usuario;
    //delete this.usuario.clase_cliente;
    //delete this.usuario.genero;
    delete this.usuario.validacion;
    //delete this.usuario.tipo_usuario;






    console.log(this.usuario);


    this.usuariosService.updateUsuario(temp_id_usuario, this.usuario)
      .subscribe(
        res => {
          console.log(res);
          alert(`Usuario Editado`);
          this.ngOnInit();
        },
        err => console.log(err)
      )

  }




}
