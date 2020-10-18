import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ProcessHTTPMsgService } from './process-httpmsg.service';


@Injectable({
  providedIn: 'root'
})
export class HeaderFooterService {

  URL_API_HEADER = "/api/v1/headerFooter";

  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

    getHeaderFooter(): Observable<any> {
      return this.http.get<any>(this.URL_API_HEADER)
      .pipe(map((data:any) => data),
      catchError(this.processHTTPMsgService.handleError));
    }
}
