import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{
  title = 'spinner-app';
  // code for testing backend, remove "implements oninit", constructor and ngOnInit later
  testBackend:string;
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.http.get('/api/v1/say-something').subscribe((resp: any) => {
      this.testBackend = resp.body;
    })
  }

}
