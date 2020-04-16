import { UsuariosService } from './../../services/usuarios.service';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../models/auth';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private usuariosService: UsuariosService, private router: Router) { }

  userLocalStorage: Auth = {
    id_usuario: 1,
    correo: '',
    password: '',
    validacion: 0,
    tipo_usuario: ''
  };

  usuarios: any = [];
  

  ngOnInit() {

    if (localStorage.getItem("usuario") != null) {
      this.userLocalStorage = JSON.parse(localStorage.getItem("usuario"));
    } else {
      console.log("ACCESO DENEGADO");
      this.router.navigate(['/error']);
    }
    this.usuariosService.getUsuario(this.userLocalStorage[0].id_usuario).subscribe(
      res => {
        console.log(res);
        this.usuarios = res;
        //console.log(this.usuarios);
      },
      err => console.log(err)
    );
  }



}
