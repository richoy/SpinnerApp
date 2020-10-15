import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { ProcessHTTPMsgService } from './process-httpmsg.service';


@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  URL_API = "/api/v1/spinner";

  constructor(
    private http: HttpClient,
    private processHTTPMsgService: ProcessHTTPMsgService
  ) { }

  getSpinner(): Observable<any> {
    return this.http.get<any>(this.URL_API) //Check and test later
      .pipe(map((data:any) => data),
      catchError(this.processHTTPMsgService.handleError));
  }


  //Inverter color function
  invertColor(hex): any {
    if (hex.indexOf('#') === 0) {
      hex = hex.slice(1);
    }
    // convert 3-digit hex to 6-digits.
    if (hex.length === 3) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    if (hex.length !== 6) {
      throw new Error('Invalid HEX color.');
    }
    // invert color components
    var r = (255 - parseInt(hex.slice(0, 2), 16)).toString(16),
        g = (255 - parseInt(hex.slice(2, 4), 16)).toString(16),
        b = (255 - parseInt(hex.slice(4, 6), 16)).toString(16);
    // pad each with zeros and return
    function padZero(str) {
      let len = 2;
      var zeros = new Array(len).join('0');
      return (zeros + str).slice(-len);
    }
    return '#' + padZero(r) + padZero(g) + padZero(b);
  }
  ///////////////////////////

}
