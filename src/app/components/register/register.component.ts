import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { EstacionService } from '../../services/estacion.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public page_title: string;
  public user: User;
  public status: string;
  public token: string;
  public estaciones;

  constructor(
    private _userService: UserService,
    private _estacionService: EstacionService
  ) {
    this.page_title = "REGISTRO";
    this.user = new User(1, '', '', '', '', '', 'ROLE_USER','','', 1, '');
    this.loadUser();
  }

  ngOnInit(): void {
    console.log('Componente de registro cargado correctamente');
    this.getEstaciones();
  }

  onSubmit(form) {
    this._userService.register(this.user, this.token).subscribe(
      response => {
        if (response.status == "succes") {
          this.status = response.status;
          form.reset();
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

  ngDoCheck() {
    this.loadUser();
  }

  loadUser() {
    this.token = this._userService.getToken();
  }

  getEstaciones(){
    this._estacionService.getestaciones(this.token).subscribe(
      response => {
        if (response.status != "error") {
          this.estaciones = response.estaciones;
          console.log(this.estaciones);
        } else {
          this.status = "error";
        }
      },
      error => {
        this.status = "error";
        console.log(<any>error);
      }
    )
  }



}
