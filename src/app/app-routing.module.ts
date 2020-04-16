import { ReporteComponent } from './components/reporte/reporte.component';
import { MisProductosComponent } from './components/mis-productos/mis-productos.component';
import { ProductoComponent } from './components/producto/producto.component';
import { ChatComponent } from './components/chat/chat.component';
import { ReportesComponent } from './components/reportes/reportes.component';
import { FormAdminComponent } from './components/form-admin/form-admin.component';
import { ProductosComponent } from './components/productos/productos.component';
import { ConfirmUserComponent } from './components/confirm-user/confirm-user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './components/home/home.component'
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Error404Component } from './components/error404/error404.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { RecuperarPasswordComponent } from './components/recuperar-password/recuperar-password.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },{
    path: 'home',
    component: HomeComponent
  },{
    path: 'form',
    component: FormComponent
  },{
    path: 'list',
    component: ListComponent
  },{
    path: 'login',
    component: LoginComponent
  },{
    path: 'edit/:id',
    component: FormComponent
  },{
    path: 'confirm/:id',
    component: ConfirmUserComponent
  },{
    path: 'login/profile',
    component: ProfileComponent
  },{
    path: 'error',
    component: Error404Component
  },{
    path: 'productos',
    component: ProductosComponent
  },{
    path: 'formAdmin',
    component: FormAdminComponent
  },{
    path: 'reportes',
    component: ReportesComponent
  },{
    path: 'chat',
    component: ChatComponent
  },{
    path: 'carrito',
    component: CarritoComponent
  },{
    path: 'producto/:id',
    component: ProductoComponent
  },{
    path: 'misProductos',
    component: MisProductosComponent
  },{
    path: 'recuperarPassword',
    component: RecuperarPasswordComponent
  },{
    path: 'reporte/:id',
    component: ReporteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
