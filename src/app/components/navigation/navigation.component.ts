import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../../models/auth';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  userLocalStorage : Auth = {
    id_usuario: 1,
    correo: '',
    password: '',
    validacion: 0,
    tipo_usuario: ''
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  get isLogin(){
    if(localStorage.getItem("usuario") != null){
      return true;
    }else{
      return false;
    }
  }

  logOut(){
    localStorage.removeItem("usuario");
    this.router.navigate(['/home']);
  }

  get isAdmin(){
    if(localStorage.getItem("usuario") != null){
      this.userLocalStorage = JSON.parse(localStorage.getItem("usuario"));
      if(this.userLocalStorage[0].tipo_usuario=="administrador"){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }

  get isCliente(){
    if(localStorage.getItem("usuario") != null){
      this.userLocalStorage = JSON.parse(localStorage.getItem("usuario"));
      if(this.userLocalStorage[0].tipo_usuario=="cliente"){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }

  get isHelp_desk(){
    if(localStorage.getItem("usuario") != null){
      this.userLocalStorage = JSON.parse(localStorage.getItem("usuario"));
      if(this.userLocalStorage[0].tipo_usuario=="help_desk"){
        return true;
      }else{
        return false;
      }
    }else{
      return false;
    }
  }



}
