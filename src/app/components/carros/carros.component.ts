import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Carro } from '../../models/carro';
import { CarroService } from '../../services/carro.service';

@Component({
  selector: 'app-carros',
  templateUrl: './carros.component.html',
  styleUrls: ['./carros.component.css']
})
export class CarrosComponent implements OnInit {

  public token: string;
  public status: string;
  public carros;
  public page_title: string;
  filtroemergencias = '';
  p1: number = 1;

  constructor(
    private _carrosService: CarroService,
    private _userService: UserService,
  ) {
    this.loadUser();
    this.page_title = "Carros de Emergencia";
  }

  ngOnInit(): void {
    this.getEstaciones();
  }

  getEstaciones() {
    this._carrosService.getcarros(this.token).subscribe(
      response => {
        if (response.status != 'error') {
          this.carros = response.carros;
        }
      },
      error => {
        this.status = 'error';
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

}
