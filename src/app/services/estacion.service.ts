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
}
