import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { RegisterComponent } from './components/register/register.component';
import { TiposEmergenciaComponent } from './components/tipos-emergencia/tipos-emergencia.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { GenTipoComponent } from './components/gen-tipo/gen-tipo.component';
import { EditTipoComponent } from './components/edit-tipo/edit-tipo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UsuariosComponent,
    RegisterComponent,
    TiposEmergenciaComponent,
    EditUserComponent,
    GenTipoComponent,
    EditTipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
