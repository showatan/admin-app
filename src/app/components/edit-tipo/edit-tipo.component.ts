import { Component, OnInit } from '@angular/core';

import { TiposEmerService } from '../../services/tipos-emer.service';
import { TipoEmer } from '../../models/tipoEmer';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-tipo',
  templateUrl: './edit-tipo.component.html',
  styleUrls: ['./edit-tipo.component.css']
})
export class EditTipoComponent implements OnInit {

  public page_title: string;
  public tipo: TipoEmer;
  public status: string;
  public token: string;
  public tipo_recibido;


  constructor(
    private _tiposEmerService: TiposEmerService,
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute 

  ) { 
    this.page_title = "REGISTRO";
    this.tipo = new TipoEmer(1, '','');
    this.loadUser();

    //llenamos el registro en el form
    this.getTipo();
  }

  onSubmit(form) {
    this._tiposEmerService.create(this.tipo, this.token).subscribe(
      response => {
        if (response.status == "succes") {
          this.status = response.status;
          form.reset();
          this._router.navigate(['/emergencia/tipos']);
        } else {
          this.status = "error";
        }
      },
      error => {
        this.status = "error";
        console.log(<any>error);
      }
    );
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.loadUser();
  }

  getTipo(){
    // SAcar el id de la url
    this._route.params.subscribe(
      params => {
        let id = +params['id']; 
 
        //Peticion Ajax
        this._tiposEmerService.getEmergen(id , this.token).subscribe(
          response =>{
            if(response.status == 'succes'){
              this.tipo_recibido=response.tipo_emergencia;
              console.log(response);
              this.tipo = new TipoEmer(
                this.tipo_recibido.id,
                this.tipo_recibido.titulo,
                this.tipo_recibido.descripcion,
              );
            }else{
              this._router.navigate(['/emergencia/tipos']);
            }
          },
          error => {
            console.log(<any>error);
            this._router.navigate(['/emergencia/tipos']);
          }
        );
      }
    );

  }

  loadUser() {
    this.token = this._userService.getToken();
  }


}
