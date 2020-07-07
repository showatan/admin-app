import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { EstacionService } from '../../services/estacion.service';
import { Estacion } from '../../models/estacion';

@Component({
  selector: 'app-estaciones',
  templateUrl: './estaciones.component.html',
  styleUrls: ['./estaciones.component.css']
})
export class EstacionesComponent implements OnInit {
public token: string;
public status: string;
public estaciones;
public page_title: string;
filtroemergencias = '';

  constructor(
    private _estacionService: EstacionService,
    private _userService: UserService,
  ) {
    this.loadUser();
    this.page_title = "Estaciones";
   }

  ngOnInit(): void {
    this.getEstaciones();
  }

  getEstaciones(){
    this._estacionService.getestaciones(this.token).subscribe(
      response=>{
        if(response.status != 'error'){
          this.estaciones = response.estaciones;
        }
      },
      error =>{this.status = 'error';
      console.log(<any>error);}
    );
  }

  ngDoCheck(){
    this.loadUser();
  }

  loadUser(){
    this.token = this._userService.getToken();
  }

}
