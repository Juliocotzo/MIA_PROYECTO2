import { Component, OnInit, HostBinding } from '@angular/core';
import { ConfirmService } from '../../services/confirm.service'
import { correoI } from '../../models/confirmCorreo'
import { ActivatedRoute } from '@angular/router';
import { AddCarritoService } from './../../services/add-carrito.service';
import { AddCarrito } from './../../models/addCarrito';
@Component({
  selector: 'app-confirm-user',
  templateUrl: './confirm-user.component.html',
  styleUrls: ['./confirm-user.component.css']
})
export class ConfirmUserComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  correo: correoI = {
    validacion: 1
  };

  carritoID: AddCarrito = {
    fecha: new Date(),
    usuario_id_usuario: 1
  };


  constructor(private confirmService: ConfirmService, private activeRoute: ActivatedRoute, private addCarrito: AddCarritoService) { }

  idParams: string = '';

  ngOnInit() {
    const params = this.activeRoute.snapshot.params;
    this.idParams = params.id;
  }


  updateUsuario() {

    //console.log(this.usuario);
    this.carritoID.usuario_id_usuario = +this.idParams;
    this.confirmService.updateUsuario(this.correo, this.idParams)
      .subscribe(
        res => {
          console.log(res);

          this.addCarrito.saveCarrito(this.carritoID)
            .subscribe(
              res => {
                console.log(res);
                //alert(`Carrito Agregado`);
              },
              err => console.log(err)
            );
          alert(`Correo confirmado`);
        },
        err => console.log(err)
      )
  }

  
}
