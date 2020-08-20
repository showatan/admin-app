import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RegisterComponent } from './components/register/register.component';
import { TiposEmergenciaComponent } from './components/tipos-emergencia/tipos-emergencia.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { GenTipoComponent } from './components/gen-tipo/gen-tipo.component';
import { EditTipoComponent } from './components/edit-tipo/edit-tipo.component';
import { EstacionesComponent } from './components/estaciones/estaciones.component';
import { GenEstacionesComponent } from './components/gen-estaciones/gen-estaciones.component';
import { EditEstacionesComponent } from './components/edit-estaciones/edit-estaciones.component';
import { GenEmergenciaComponent } from './components/gen-emergencia/gen-emergencia.component';
import { VerEmergenciaComponent } from './components/ver-emergencia/ver-emergencia.component';
import { ImageEmergenciaComponent } from './components/image-emergencia/image-emergencia.component';
import { CarrosComponent } from './components/carros/carros.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout/:sure', component: LoginComponent},
  {path: 'users', component: UsuariosComponent},
  {path: 'users/register', component: RegisterComponent},
  {path: 'emergencia/tipos', component: TiposEmergenciaComponent},
  {path: 'users/edit/:id', component: EditUserComponent},
  {path: 'users/delete/:sure', component: UsuariosComponent},
  {path: 'emergencia/tipos/create', component: GenTipoComponent},
  {path: 'emergencia/tipos/update/:id', component: EditTipoComponent},
  {path: 'emergencia/tipos/delete/:sure', component: TiposEmergenciaComponent},
  {path: 'estaciones', component: EstacionesComponent},
  {path: 'estaciones/create', component: GenEstacionesComponent},
  {path: 'estaciones/update/:id', component: EditEstacionesComponent},
  {path: 'emergencia/create', component: GenEmergenciaComponent},
  {path: 'emergencia/view/:id', component: VerEmergenciaComponent},
  {path: 'emergencia/image/:id', component: ImageEmergenciaComponent},
  {path: 'carros', component: CarrosComponent}
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { routes }
