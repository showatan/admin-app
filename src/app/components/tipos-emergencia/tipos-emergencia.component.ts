import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { TiposEmerService } from '../../services/tipos-emer.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-tipos-emergencia',
  templateUrl: './tipos-emergencia.component.html',
  styleUrls: ['./tipos-emergencia.component.css']
})
export class TiposEmergenciaComponent implements OnInit {
public token: string;
public status: string;
public tipos;
public page_title: string;
filtroemergencias = '';
p1: number = 1;

  constructor(
    private _userService: UserService,
    private _tipoEmerService: TiposEmerService,
    private _router: Router,
    private _route: ActivatedRoute 
  ) { 
    this.loadUser();
    this.page_title = "Tipos de Emergencia";
  }

  ngOnInit(): void {

    this.getTipos();
    this.delete();
  }

  getTipos(){
    this._tipoEmerService.getEmergencia(this.token).subscribe(
      response=>{
        if(response.status != 'error'){
          this.tipos = response.tipos_emergencias;
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

  delete(){
    this._route.params.subscribe(
      params => {
        let logout = +params['sure'];
        
        if(!isNaN(logout)){
          this._tipoEmerService.delete(logout, this.token).subscribe(
            response => {
              if(response.status != 'error'){
                this.status = 'succcess';
                 //redirigir a inicio
                this._router.navigate(['/emergencia/tipos']);
              }
            },
            error => {
              this.status = 'error';
              console.log(<any>error);
            }
          );

          
        }
      }
    );
  }
}
