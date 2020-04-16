import { UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../models/auth';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  userLocalStorage: Auth = {
    id_usuario: 1,
    correo: '',
    password: '',
    validacion: 0,
    tipo_usuario: ''
  };

  usuarios: any = [];
  constructor(private usuariosService: UsuariosService, private router: Router) { }

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

    this.usuariosService.getUsuarios().subscribe(
      res => {
        console.log(res);
        this.usuarios = res;
      },
      err => console.log(err)
    );

  }





}
