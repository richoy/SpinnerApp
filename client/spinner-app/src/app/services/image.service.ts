import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  URL_API = "/api/v1/imageUpload";

  constructor(private http: HttpClient) { }

  public uploadImage(image: File): Observable<any> {
    const imageF = new FormData();

    imageF.append('imageFile', image);

    return this.http.post(this.URL_API, imageF);
  }
}
