import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-backend-control',
  templateUrl: './backend-control.component.html',
  styleUrls: ['./backend-control.component.scss']
})
export class BackendControlComponent implements OnInit {

  public isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
