import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class CenterImageService {

  URL_API = "/api/v1/centerImage";

  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) { }

  getImageCenter(): Observable<any> {
    return this.http.get<any>(this.URL_API)
      .pipe(map((data:any) => data),
      catchError(this.processHTTPMsgService.handleError));
  }

  sendImageCenter(Form:any): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<any>(this.URL_API, Form)
      .pipe(catchError(this.processHTTPMsgService.handleError));
  }; 

  deleteImageCenter() {
    return this.http.delete(this.URL_API);
  }

}
