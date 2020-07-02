import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import { EstacionService } from '../../services/estacion.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public page_title: string;
  public user: User;
  public status: string;
  public token: string;
  public identity;
  public estaciones;

  constructor(
    private _userService: UserService,
    private _estacionService: EstacionService,
    private _router: Router,
    private _route: ActivatedRoute 
  ) {
    this.page_title = "Actualizacion de Usuario";
    this.user = new User(1, '', '', '', '', '', 'ROLE_USER','','', 1, '');
    this.loadUser();

    //rellenar el objeto
    this.getUser();
    console.log('hola' + this.identity);
    
  }


  ngOnInit(): void {
    console.log('Componente de registro cargado correctamente');
    this.getEstaciones();
  }

  onSubmit(form) {
    this._userService.update(this.user, this.token).subscribe(
      response => {
        if (response.status == "succes") {
          this.status = response.status;
          form.reset();
          this._router.navigate(['users']);
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

  getUser(){
    // SAcar el id de la url
    this._route.params.subscribe(
      params => {
        let id = +params['id']; 
 
        //Peticion Ajax
        this._userService.getUser(id , this.token).subscribe(
          response =>{
            if(response.status == 'succes'){
              this.identity = response.user;
              console.log(this.identity);
              this.user = new User(
                this.identity.user_id,
                this.identity.email,
                this.identity.nombre,
                this.identity.last_name,
                this.identity.telefono,
                this.identity.rango,
                this.identity.rol,
                this.identity.registro,
                this.identity.dpi,
                this.identity.idestacion,
                ''
              );
            }else{
              this._router.navigate(['/users']);
            }
          },
          error => {
            console.log(<any>error);
            this._router.navigate(['/users']);
          }
        );
      }
    );

  }
  
  loadUser() {
    this.token = this._userService.getToken();
  }

  getEstaciones() {
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
