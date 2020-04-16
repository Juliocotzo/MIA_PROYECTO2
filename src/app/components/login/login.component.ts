import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Auth } from '../../models/auth'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth: Auth = {
    id_usuario: 1,
    correo: '',
    password: '',
    validacion: 0,
    tipo_usuario: ''
  };

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem("usuario") != null) {
      let user = JSON.parse(localStorage.getItem("usuario"));
    } else {
      console.log(`Ningun usuario ha iniciado sesion`);
    }

  }

  logIn(email, password) {
    this.authService.getUsuario(email.value).subscribe(
      res => {
        this.auth = res;
        if (this.auth[0].correo == email.value) {
          if (this.auth[0].password == password.value) {
            if (this.auth[0].validacion == 1) {
              console.log(`USUARIO LOGUEADO`);
              localStorage.setItem("usuario", JSON.stringify(this.auth));
              this.router.navigate(['/login/profile']);
            } else {
              alert("No ha verificado su cuenta de correo");
            }
          } else {
            alert("La contraseña no es correcta");
          }
        } else {
          alert("No encontramos ninguna cuenta con esa dirección de correo electrónico");
        }
      },
      err => console.log(err)
    )
  }

}
