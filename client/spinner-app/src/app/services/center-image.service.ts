import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ProcessHTTPMsgService } from './process-httpmsg.service';
import { baseHref } from '../shared/baseHref';

@Injectable({
  providedIn: 'root'
})
export class CenterImageService {

    
  TOKEN = localStorage.getItem('userToken');
  
  httpOptions = {
    headers: new HttpHeaders(
      { 'Authorization': `Bearer ${this.TOKEN}`})
  };

  URL_API = `${baseHref}api/v1/centerImage`;

  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) { }

  getImageCenter(): Observable<any> {
    return this.http.get<any>(this.URL_API, this.httpOptions)
      .pipe(map((data:any) => data),
      catchError(this.processHTTPMsgService.handleError));
  }

  sendImageCenter(Form:any): Observable<any> {
    return this.http.post<any>(this.URL_API, Form, this.httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }; 

  deleteImageCenter() {
    return this.http.delete(this.URL_API, this.httpOptions);
  }

}
