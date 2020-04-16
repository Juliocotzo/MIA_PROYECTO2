import { Component, OnInit, HostBinding } from '@angular/core';
import { Password } from '../../models/Password'
import { ActivatedRoute } from '@angular/router';
import { RecuperarPasswordService } from 'src/app/services/recuperar-password.service';

@Component({
  selector: 'app-recuperar-password',
  templateUrl: './recuperar-password.component.html',
  styleUrls: ['./recuperar-password.component.css']
})
export class RecuperarPasswordComponent implements OnInit {
  pass: Password = {
    password: 'Hola'
  };
  constructor(private recuperarService: RecuperarPasswordService) { }

  ngOnInit() {
  }
  recuperar(email) {
    //console.log(email.value);
    this.recuperarService.updatePassword(this.pass, email.value)
      .subscribe(
        res => {
          console.log(res);
          alert(`Password Actualizada`);
        },
        err => console.log(err)
      )
  }

}
