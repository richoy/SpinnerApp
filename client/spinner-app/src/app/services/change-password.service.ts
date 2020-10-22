import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {
    
  TOKEN = localStorage.getItem('userToken');
  
  httpOptions = {
    headers: new HttpHeaders({ 
      'Authorization': `Bearer ${this.TOKEN}`, 
      'Content-Type': 'application/json'})
  };

  URL_API = "/users/resetPassword";

  constructor(
    private http: HttpClient
  ) { }

  ChangePassword(user: passwordChange){
    return this.http.post(this.URL_API, user, this.httpOptions);
  }

}

export class passwordChange{

  username: string;
  oldpassword: string;
  newpassword: string;

  constructor(user, oldPass, newPass){
    this.username = user;
    this.oldpassword = oldPass;
    this.newpassword = newPass;
  }
}
