import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';
import { TipoEmer } from '../models/tipoEmer';

@Injectable({
  providedIn: 'root'
})
export class TiposEmerService {
  public url: string;

  constructor(
    public _http: HttpClient
  ) { 
    this.url = global.url;
  }

create(tipo_emer, token): Observable<any>{
  let json = JSON.stringify(tipo_emer);
    let params = 'json=' + json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', token);

    return this._http.post(this.url+'tipo/emergencia/create', params, {headers: headers});
}

update(user, token): Observable<any>{
  if(token != null){
      let json = JSON.stringify(user);
  let params = 'json=' + json;

  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                  .set('Authorization', token);

  return this._http.post(this.url+'tipo/emergencia/update', params, {headers: headers});
  }
}

getEmergen(id, token): Observable<any>{
  if(token != null){

  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                  .set('Authorization', token);

  return this._http.get(this.url+'tipo/emergencia/list/' + id, {headers: headers});
  }
}

getEmergencia(token): Observable<any>{
  
  let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                  .set('Authorization', token);

  return this._http.get(this.url + 'tipo/emergencia/list', {headers: headers});
}

delete(id, token): Observable<any>{
  if(token != null){
      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                  .set('Authorization', token);
      return this._http.delete(this.url+'tipo/emergencia/delete/' + id, {headers: headers});
  }
}


}
