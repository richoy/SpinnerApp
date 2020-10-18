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

  TOKEN = localStorage.getItem('userToken');
  
  httpOptions = {
    headers: new HttpHeaders({ 'Authorization': `Bearer ${this.TOKEN}` })
  };

  URL_API = "/api/v1/spinner";

  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  sendSpinner( spinnerArray: Array <formSpinnerControl>) {
    return this.http.post(this.URL_API, spinnerArray, this.httpOptions);
  }

  deleteSpinner() {
    return this.http.delete(this.URL_API, this.httpOptions);
  }
}
