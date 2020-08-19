import { Component, OnInit } from '@angular/core';

import { TiposEmerService } from '../../services/tipos-emer.service';
import { TipoEmer } from '../../models/tipoEmer';
import { UserService } from '../../services/user.service';
import { Emergencia } from '../../models/emergencia';
import { EmergenciasService } from '../../services/emergencias.service';
import { MapMarker } from '@angular/google-maps';
import { global } from '../../services/global';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { CarroService } from '../../services/carro.service';



@Component({
  selector: 'app-gen-emergencia',
  templateUrl: './gen-emergencia.component.html',
  styleUrls: ['./gen-emergencia.component.css']
})
export class GenEmergenciaComponent implements OnInit {

  public page_title: String;
  public new_emergencia: Emergencia;
  public token;
  public identity;
  public tipoEmer;
  public status: string;
  public marker;
  public jsonDoc;
  public carros;

  //ckeditor config


  //end ckeditor config

  fileToUpload: File = null;

  center = { lat: 14.635700976288001, lng: -90.51143646240234 };
  zoom = 12;
  display?: google.maps.LatLngLiteral;


  drag = { draggable: true }
  public position = this.center;

  public lats;
  public longs;

  constructor(
    private _emergenciasService: EmergenciasService,
    private _userService: UserService,
    private _tipoEmerService: TiposEmerService,
    private _router: Router,
    private _route: ActivatedRoute,
    private _carroService: CarroService
  ) {
    this.loadUser();

    this.page_title = "Crear Emergencia";

    this.new_emergencia = new Emergencia(1, '', '', null, null, this.identity.sub, 1, 1,0, '', '');

  }

  onSubmit(form) {
    console.log(this.new_emergencia);
    this._emergenciasService.postFile(this.new_emergencia,this.token).subscribe(
      response => {
        this._router.navigate(['/emergencia/image/', response.emergencia.id]);

      }, error => {
        this.status = "error";
        console.log(<any>error);
      });
  }

  ngOnInit(): void {
    /*text area auto size*/
    var textarea = document.querySelector('textarea');

    textarea.addEventListener('keydown', autosize);

    function autosize() {
      var el = this;
      setTimeout(function () {
        el.style.cssText = 'height:auto; padding:0';
        // for box-sizing other than "content-box" use:
        // el.style.cssText = '-moz-box-sizing:content-box';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
      }, 0);
    }
    //End text area editing
    this.getTipos();
    this.getCarros();
    this.center = { lat: parseFloat(this.identity.estacion.lat), lng: parseFloat(this.identity.estacion.long) };
  }

  ngDoCheck() {
    this.loadUser();
  }

  loadUser() {
    this.token = this._userService.getToken();
    this.identity = this._userService.getIdentity();
    this.position = this.center;
  }

  getTipos() {
    this._tipoEmerService.getEmergencia(this.token).subscribe(
      response => {
        if (response.status != "error") {
          this.tipoEmer = response.tipos_emergencias;
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

  click(marker: MapMarker) {
    this.lats = marker.getPosition().lat().toString();
    this.longs = marker.getPosition().lng().toString();
    this.new_emergencia.lat = this.lats;
    this.new_emergencia.long = this.longs;


  }

  getCarros() {
    this._carroService.getcarros(this.token).subscribe(
      response => {
        if (response.status != "error") {
          this.carros = response.carros;
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
