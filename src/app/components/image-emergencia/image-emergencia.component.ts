import { Component, OnInit } from '@angular/core';
import { global } from '../../services/global';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-image-emergencia',
  templateUrl: './image-emergencia.component.html',
  styleUrls: ['./image-emergencia.component.css']
})
export class ImageEmergenciaComponent implements OnInit {

  public page_title: String;
  public token;
  public identity;
  public tipoEmer;
  public status: string;
  public id_emer;
  public urlsend;
  public btnfinalizar = false;

  customStyle = {
    selectButton: {
      "background-color": "#e5e5e5",
      "border-radius": "25px",
      "color": "#000"
    },
    clearButton: {
      "background-color": "#FFF",
      "border-radius": "25px",
      "color": "#000",
      "margin-left": "10px",
      "visibility": "hidden"
    },
    layout: {
      "background-color": "#4ea8de",
      "border-radius": "25px",
      "color": "white",
      "font-size": "15px",
      "margin": "10px",
      "padding-top": "5px",
      "width": "100%"
    },
    previewPanel: {
      "background-color": "#4ea8de",
      "border-radius": "0 0 25px 25px",
    }
  };


  constructor(
    private _userService: UserService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.getId();
  }

  ngDoCheck() {
    this.loadUser();
  }

  loadUser() {
    this.token = this._userService.getToken();
    this.identity = this._userService.getIdentity();

  }

  getId(){
    // SAcar el id de la url
    this._route.params.subscribe(
      params => {
        this.id_emer = +params['id']; 
        this.urlsend = global.url + 'emergencia/upload/'+this.id_emer;
        console.log(this.urlsend);
      }
    );

  }
  imageUpload(datos){
    let data = datos;
    console.log(data);
  
  }
  onUploadStateChanged(state: boolean) {
    if (state==false){
      this.btnfinalizar = true;
    }
    if (state==true){
      this.btnfinalizar = false;
    }
    console.log(state);
  }

  
  
}
