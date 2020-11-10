import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseHref } from '../shared/baseHref';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL_API = `${baseHref}users/login`;
  initialAdmin = `${baseHref}api/v1/initialStatus/initialUser`;

  constructor(
    private http: HttpClient
  ) { }

  Login(user: userLogin){
    return this.http.post(this.URL_API, user);
  }

  InitialUser(){
    return this.http.get(this.initialAdmin);
  }
}


export class userLogin{

  username: string;
  password: string;

  constructor(user, pass){
    this.username = user;
    this.password = pass;
  }
}