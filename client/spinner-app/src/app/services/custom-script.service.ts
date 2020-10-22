import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class CustomScriptService {
  
  TOKEN = localStorage.getItem('userToken');
  
  httpOptions = {
    headers: new HttpHeaders({ 
      'Authorization': `Bearer ${this.TOKEN}`, 
      'Content-Type': 'application/json'})
  };


  URL_API = "/api/v1/headerFooter";

  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  sendHeaderFooter(Form:any): Observable<any> {
    return this.http.post<any>(this.URL_API, Form, this.httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }; 

  deleteHeaderFooter() {
    return this.http.delete(this.URL_API, this.httpOptions);
  }

}
