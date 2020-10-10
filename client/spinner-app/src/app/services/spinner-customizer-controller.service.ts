import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { formSpinnerControl } from '../shared/form-spinner-controller';
import { ProcessHTTPMsgService } from './process-httpmsg.service';

@Injectable({
  providedIn: 'root'
})
export class SpinnerCustomizerControllerService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  submitForm( formSpinnerControl: formSpinnerControl): Observable<formSpinnerControl> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    // Correct afterwards
    return this.http.post<formSpinnerControl>('localhost:3000/' + 'form', formSpinnerControl, httpOptions)
      .pipe(catchError(this.processHTTPMsgService.handleError));;
  }
}
