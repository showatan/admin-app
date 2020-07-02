import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { global } from './global';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public url: string;
  public identity: string;
  public token: string;

  constructor(
      public _http: HttpClient
  ){
      this.url = global.url;
  }

  signup(user, gettoken = null): Observable<any>{
    if(gettoken != null){
        user.gettoken = 'true';
    }

    let json = JSON.stringify(user);
    let params = 'json=' + json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');

    return this._http.post(this.url + 'user/login', params, {headers: headers});
}

register(user, token): Observable<any>{
    let json = JSON.stringify(user);
    let params = 'json=' + json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', token);

    return this._http.post(this.url+'user/create', params, {headers: headers});
}

update(user, token): Observable<any>{
    if(token != null){
        let json = JSON.stringify(user);
    let params = 'json=' + json;

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', token);

    return this._http.post(this.url+'user/update', params, {headers: headers});
    }
}

getUsers(token): Observable<any>{
    if(token != null){

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', token);

    return this._http.get(this.url+'user/detail', {headers: headers});
    }
}

getUser(id, token): Observable<any>{
    if(token != null){

    let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', token);

    return this._http.get(this.url+'user/detail/' + id, {headers: headers});
    }
}

delete(id, token): Observable<any>{
    if(token != null){
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded')
                                    .set('Authorization', token);
        return this._http.delete(this.url+'user/delete/' + id, {headers: headers});
    }
}

getIdentity(){
    let identity = JSON.parse(localStorage.getItem('identity'));
    if (identity && identity != "undefined"){
        this.identity = identity;
    }else{
        this.identity = null;
    }

    return this.identity;
}

getToken(){
    let token = localStorage.getItem('token');
    if(token && token != "undefined"){
        this.token = token;
    }else{
        this.token = null;
    }

    return this.token;
}

}
