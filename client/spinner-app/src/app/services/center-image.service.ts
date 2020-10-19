import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
