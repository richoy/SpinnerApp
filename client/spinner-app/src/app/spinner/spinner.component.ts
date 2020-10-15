import { Component, OnInit } from '@angular/core';

import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  SpinnerFields: any;
  styleExpr: any[] = ['']; // Backgorund color
  fontColor: any[] = ['']; // Font Color

  constructor( private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.getSpinner();
  }

  getSpinner(): void {
    this.spinnerService.getSpinner()
      .subscribe( spinnerFields => {
        //spinnerFields.image = spinnerFields.image.replace("\", "/");
        this.SpinnerFields = spinnerFields;
        for(let i=0; i<this.SpinnerFields.length; i++) { //Substitute backslashes for slashes
          this.SpinnerFields[i].image = this.SpinnerFields[i].image.replace(/\\/g, "/");
          this.styleExpr[i] = this.SpinnerFields[i].bgColor; // Backgorund color
          this.fontColor[i] = this.spinnerService.invertColor(this.styleExpr[i]); //Font Color
        }
        console.log(this.styleExpr);
        console.log(this.fontColor);
      })
  }

}
