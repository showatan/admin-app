import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from './global';
import { AxiosInstance} from 'axios';
@Injectable({
  providedIn: 'root'
})
export class EmergenciasService {
  public url: string;
  filterpost = '';

  constructor(
    public _http: HttpClient
  ) {
    this.url = global.url;
  }

  getemergencias(token): Observable<any> {

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.get(this.url + 'emergencia/list', { headers: headers });
  }

  getemergencia(id, token): Observable<any> {

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Authorization', token);

    return this._http.get(this.url + 'emergencia/list/' + id, { headers: headers });
  }

  postFile(emergencia, token): Observable<any> {
    let json = JSON.stringify(emergencia);
    let params = 'json=' + json;
    console.log(params);
    
    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                  .set('Authorization', token);

  
    return this._http.post(this.url + 'emergencia/create', params, {headers: headers});
  }


}