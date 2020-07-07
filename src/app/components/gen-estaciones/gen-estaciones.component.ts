import { Component, OnInit, Input } from '@angular/core';
import { Estacion } from '../../models/estacion';
import { UserService } from '../../services/user.service';
import { MapMarker } from '@angular/google-maps';
import { EstacionService } from '../../services/estacion.service';
import { Router, ActivatedRoute, Params } from '@angular/router';


@Component({
  selector: 'app-gen-estaciones',
  templateUrl: './gen-estaciones.component.html',
  styleUrls: ['./gen-estaciones.component.css']
})
export class GenEstacionesComponent implements OnInit {

  public page_title: string;
  public estacion: Estacion;
  public status: string;
  public token: string;
  public lat_c: string;
  public marker;

  center = {lat: 14.635700976288001, lng: -90.51143646240234 };
  zoom = 9;
  display?: google.maps.LatLngLiteral;


  drag = {draggable:true}
  public position = this.center;
  
  public lats;
  public longs;

  constructor(
    private _userService: UserService,
    private _estacionService: EstacionService,
    private _router: Router,
    private _route: ActivatedRoute 

  ) {
    this.estacion = new Estacion(1, 1, '', '', '', '', '');
    this.page_title = "REGISTRO DE ESTACIONES";
    
  }

  ngOnInit(): void {
  

  }
  onSubmit(form) {
    this._estacionService.create(this.token, this.estacion).subscribe(
      response => {
        if (response.status == "succes") {
          this.status = response.status;
          form.reset();
          this._router.navigate(['/estaciones']);
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

  onKey(value: string, marker: MapMarker) {
    this.position.lat = parseFloat(value);
    marker.position = {lat: parseFloat(value), lng: marker.getPosition().lng() };

  }

  onKeylg(value: string, marker: MapMarker){
    this.position.lat = parseFloat(value);
    marker.position = {lat: marker.getPosition().lat(), lng: parseFloat(value) };
  }

  click(marker: MapMarker) {
    this.lats = marker.getPosition().lat().toString();
    this.longs = marker.getPosition().lng().toString();
    this.estacion = new Estacion(1, 1, '', '', '', this.longs,this.lats);
    
    
  }




  ngDoCheck() {
    this.loadUser();
  }

  loadUser() {
    this.token = this._userService.getToken();
  }

}
