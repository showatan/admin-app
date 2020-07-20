import { Component, OnInit } from '@angular/core';
import { EmergenciasService } from '../../services/emergencias.service';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-ver-emergencia',
  templateUrl: './ver-emergencia.component.html',
  styleUrls: ['./ver-emergencia.component.css']
})
export class VerEmergenciaComponent implements OnInit {
  public page_title: string;
  public status: string;
  public token: string;
  public identity;
  public emergencia;

  constructor(
    private _emergenciasService: EmergenciasService,
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute 
  ) {
    this.loadUser();
   }

  ngOnInit(): void {
    this.getEmergencias();
  }
  getEmergencias() {
      // SAcar el id de la url
      this._route.params.subscribe(
        params => {
          let id = +params['id']; 
   
          //Peticion Ajax
          this._emergenciasService.getemergencia(id,this.token).subscribe(
            response => {
              if (response.status != "error") {
                this.emergencia = response.emergencia;
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
      );
  }

  ngDoCheck() {
    this.loadUser();
  }

  loadUser() {
    this.token = this._userService.getToken();
  }

}
