import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Estacion } from '../models/estacion';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class EstacionService {
  public url: string;

  constructor(
    public _http: HttpClient
  ) { 
    this.url = global.url;
  }


getestaciones(token): Observable<any>{
  
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

  return this._http.get(this.url + 'estacion/list', {headers: headers});
}

create(token, estacion): Observable<any>{
  let json = JSON.stringify(estacion);
  let params = 'json=' + json;

  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                  .set('Authorization', token);

  return this._http.post(this.url+'estacion/create', params, {headers: headers});
}

update(estacion, token): Observable<any>{
  if(token != null){
      let json = JSON.stringify(estacion);
  let params = 'json=' + json;

  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                  .set('Authorization', token);

  return this._http.post(this.url+'estacion/update', params, {headers: headers});
  }
}

getEstacion(id, token): Observable<any>{
  if(token != null){

  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                  .set('Authorization', token);

  return this._http.get(this.url+'estacion/list/' + id, {headers: headers});
  }
}

}
