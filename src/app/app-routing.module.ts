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
  {path: 'emergencia/tipos/delete/:sure', component: TiposEmergenciaComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { routes }
