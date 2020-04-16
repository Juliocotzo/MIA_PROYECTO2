import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FormComponent } from './components/form/form.component';
import { ListComponent } from './components/list/list.component';

import { UsuariosService } from './services/usuarios.service';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule} from '@angular/forms';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ConfirmUserComponent } from './components/confirm-user/confirm-user.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Error404Component } from './components/error404/error404.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { FormAdminComponent } from './components/form-admin/form-admin.component';
import { ChatComponent } from './components/chat/chat.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { MisProductosComponent } from './components/mis-productos/mis-productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';
import { ReporteComponent } from './components/reporte/reporte.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FormComponent,
    ListComponent,
    HomeComponent,
    LoginComponent,
    ConfirmUserComponent,
    ProfileComponent,
    Error404Component,
    ProductosComponent,
    ReportesComponent,
    FormAdminComponent,
    ChatComponent,
    CarritoComponent,
    MisProductosComponent,
    ProductoComponent,
    RecuperarPasswordComponent,
    ReporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [
    UsuariosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
