import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  URL_API = "/api/v1/results";
  
  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getEmails(): Observable<any> {
    return this.http.get<any>(this.URL_API) //Check and test later
      .pipe(map((data:any) => data),
      catchError(this.processHTTPMsgService.handleError));
  }
}
