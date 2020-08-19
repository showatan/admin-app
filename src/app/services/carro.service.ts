import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carro } from '../models/carro';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class CarroService {
  public url: string;

  constructor(
    public _http: HttpClient
  ) { 
    this.url = global.url;
   }

   getcarros(token): Observable<any>{
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get(this.url + 'carro/list', {headers: headers});
   }
}
