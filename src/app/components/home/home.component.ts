import { Component, OnInit } from '@angular/core';
import { EmergenciasService } from '../../services/emergencias.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public page_title: string;
  public status: string;
  public token: string;
  public identity;
  public emergencias;
  filtroemergencias= '';
  p1: number = 1;

  constructor(
    private _emergenciasService: EmergenciasService,
    private _userService: UserService,
  ) {

   }

  ngOnInit(): void {
    this.getEmergencias();
  }
  getEmergencias() {
    this._emergenciasService.getemergencias(this.token).subscribe(
      response => {
        if (response.status != "error") {
          this.emergencias = response.emergencias;
          this.emergencias.reverse();
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

  ngDoCheck() {
    this.loadUser();
  }

  loadUser() {
    this.token = this._userService.getToken();
  }
}
