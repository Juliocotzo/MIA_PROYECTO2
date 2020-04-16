import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../models/auth';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private router: Router) { }
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
      
    } else {
      console.log("ACCESO DENEGADO");
      this.router.navigate(['/error']);
    }
  }

}
