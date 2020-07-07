import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { GoogleMapsModule } from '@angular/google-maps';

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
import { FiltroEmergenciasPipe } from './pipes/filtro-emergencias.pipe';
import { EstacionesComponent } from './components/estaciones/estaciones.component';
import { GenEstacionesComponent } from './components/gen-estaciones/gen-estaciones.component';
import { EditEstacionesComponent } from './components/edit-estaciones/edit-estaciones.component';


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
    EditTipoComponent,
    FiltroEmergenciasPipe,
    EstacionesComponent,
    GenEstacionesComponent,
    EditEstacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    GoogleMapsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
