import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { isNumber, isNull } from 'util';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers: [UserService]
})
export class UsuariosComponent implements OnInit {
  public token: string;
  public status: string;
  public usuarios;
  public page_title: string;
  config: any;
  filtroemergencias = '';
  p1: number = 1;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { 
    this.loadUser();
    this.page_title = "Usuarios";
  }

  

  ngOnInit(): void {
    this.getUsers();
    this.delete();
  }

  getUsers(){
    this._userService.getUsers(this.token).subscribe(
      response => {
        if(response.status != 'error'){
          this.usuarios = response.user;
        }
      },
      error => {
        this.status = 'error';
        console.log(<any>error);
      }
    );
  }

  delete(){
    this._route.params.subscribe(
      params => {
        let logout = +params['sure'];
        
        if(!isNaN(logout)){
          this._userService.delete(logout, this.token).subscribe(
            response => {
              if(response.status != 'error'){
                this.status = 'succcess';
                 //redirigir a inicio
                this._router.navigate(['/users']);
                this.status = 'succcess';
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

  ngDoCheck(){
    this.loadUser();
  }

  loadUser(){
    this.token = this._userService.getToken();
  }

  
}
