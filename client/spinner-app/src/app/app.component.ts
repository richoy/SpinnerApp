import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'spinner-app';
  // code for testing backend, remove "implements oninit", constructor and ngOnInit later
  testBackend:string;
  constructor() { }

  ngOnInit(): void {

  }

}
