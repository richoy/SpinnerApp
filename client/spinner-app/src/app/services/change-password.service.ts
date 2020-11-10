import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { baseHref } from '../shared/baseHref';

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

  URL_API = `${baseHref}users/resetPassword`;
  GET_CURRENT_URL_API = `${baseHref}users/current`;

  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) { }

  ChangePassword(user: passwordChange, id: any){
    return this.http.put(`${this.URL_API}/${id}`, user, this.httpOptions)
    .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  getCurrent(){
    return this.http.get(this.GET_CURRENT_URL_API, this.httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

}

export class passwordChange{

  password: string;

  constructor(password){
    this.password = password;
  }
}
