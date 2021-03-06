import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { baseHref } from '../shared/baseHref';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  URL_API = `${baseHref}api/v1/results`;

  TOKEN = localStorage.getItem('userToken');
  
  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${this.TOKEN}` })
  };

  
  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getEmails(): Observable<any> {
    return this.http.get<any>(this.URL_API, this.httpOptions) //Check and test later
      .pipe(map((data:any) => data),
      catchError(this.processHTTPMsgService.handleError));
  }

  sendEmails(Form:any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<any>(this.URL_API, Form)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }

  deleteEmails(){
    return this.http.delete(this.URL_API, this.httpOptions);
  }
}
