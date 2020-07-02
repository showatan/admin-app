import { Component, OnInit } from '@angular/core';

import { TiposEmerService } from '../../services/tipos-emer.service';
import { TipoEmer } from '../../models/tipoEmer';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-gen-tipo',
  templateUrl: './gen-tipo.component.html',
  styleUrls: ['./gen-tipo.component.css']
})
export class GenTipoComponent implements OnInit {
  public page_title: string;
  public tipo: TipoEmer;
  public status: string;
  public token: string;


  constructor(
    private _tiposEmerService: TiposEmerService,
    private _userService: UserService,

  ) { 
    this.page_title = "REGISTRO";
    this.tipo = new TipoEmer(1, '','');
    this.loadUser();
  }

  onSubmit(form) {
    this._tiposEmerService.create(this.tipo, this.token).subscribe(
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

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.loadUser();
  }

  loadUser() {
    this.token = this._userService.getToken();
  }
}
