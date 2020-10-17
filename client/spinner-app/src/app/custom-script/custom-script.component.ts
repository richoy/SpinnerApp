import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-script',
  templateUrl: './custom-script.component.html',
  styleUrls: ['./custom-script.component.scss']
})
export class CustomScriptComponent implements OnInit {
  
  public isMenuCollapsed = true;

  constructor() { }

  ngOnInit(): void {
  }

}
