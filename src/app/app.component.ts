import { Component, OnInit, DoCheck } from '@angular/core';
import { UserService } from './services/user.service';
import { global } from './services/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, DoCheck{
  title = 'admin-app';
  public identity;
  public token;
  public url;
  public categories;

  constructor(
    private _userService: UserService,
  ){
    this.loadUser();
    this.url = global.url;
  }

  ngOnInit(){

  }
  
  ngDoCheck(){
    this.loadUser();
  }

  loadUser(){
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }
}
