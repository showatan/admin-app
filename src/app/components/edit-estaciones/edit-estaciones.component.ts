import { Component, OnInit } from '@angular/core';
import { Estacion } from '../../models/estacion';
import { UserService } from '../../services/user.service';
import { MapMarker } from '@angular/google-maps';
import { EstacionService } from '../../services/estacion.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-estaciones',
  templateUrl: './edit-estaciones.component.html',
  styleUrls: ['./edit-estaciones.component.css']
})
export class EditEstacionesComponent implements OnInit {
  public page_title: string;
  public estacion: Estacion;
  public status: string;
  public token: string;
  public lat_c: string;
  public marker;
  public estacion_rec: Estacion;

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
    this.page_title = "EDITAR DE ESTACION";
    this.loadUser();
    this.getEstacion();
    
  }


  ngOnInit(): void {
  }

  onSubmit(form) {
    this._estacionService.update(this.estacion, this.token).subscribe(
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
    this.estacion = new Estacion(this.estacion_rec.id, this.estacion_rec.no_estacion, this.estacion_rec.direccion,
       this.estacion_rec.nombre, this.estacion_rec.telefono, this.longs,this.lats);
    
    
  }




  ngDoCheck() {
    this.loadUser();
  }

  loadUser() {
    this.token = this._userService.getToken();
  }

  getEstacion(){
 
    // SAcar el id de la url
    this._route.params.subscribe(
      params => {
        let id = +params['id']; 
       
        //Peticion Ajax
        this._estacionService.getEstacion(id , this.token).subscribe(
          response =>{
           if(response.status == 'succes'){
              this.estacion_rec = response.estacion;
              this.estacion = new Estacion(
                this.estacion_rec.id,
                this.estacion_rec.no_estacion,
                this.estacion_rec.direccion,
                this.estacion_rec.nombre,
                this.estacion_rec.telefono,
                this.estacion_rec.long,
                this.estacion_rec.lat
              );
              this.center = {lat: parseFloat(this.estacion_rec.lat), lng: parseFloat(this.estacion_rec.long)};
              this.position = {lat: parseFloat(this.estacion_rec.lat), lng: parseFloat(this.estacion_rec.long)};
            }else{
              this._router.navigate(['/estaciones']);
            }
          },
          error => {
            console.log(<any>error);
            this._router.navigate(['/estaciones']);
          }
        );
      }
    );

  }

 


}
