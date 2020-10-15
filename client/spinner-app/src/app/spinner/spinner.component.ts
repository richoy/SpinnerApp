import { Component, OnInit } from '@angular/core';

import { SpinnerService } from '../services/spinner.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {

  SpinnerFields: any;
  bgColorStyle: any[] = ['']; // Backgorund color
  fontColor: any[] = ['']; // Font Color

  fieldStyleNth: any[] = [''] //Individual field style
  holder: any[] = ['']

  constructor( private spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.getSpinner();
  }

  getSpinner(): void {
    this.spinnerService.getSpinner()
      .subscribe( spinnerFields => {
        //spinnerFields.image = spinnerFields.image.replace("\", "/");
        this.SpinnerFields = spinnerFields;
        let angle = 360/this.SpinnerFields.length;
        for(let i=0; i<this.SpinnerFields.length; i++) { //Substitute backslashes for slashes
          this.SpinnerFields[i].image = this.SpinnerFields[i].image.replace(/\\/g, "/");
          this.bgColorStyle[i] = this.SpinnerFields[i].bgColor; // Backgorund color
          this.fontColor[i] = this.spinnerService.invertColor(this.bgColorStyle[i]); //Font Color
          this.holder[i] = {'transform': 'rotate(' + angle*(i) + 'deg)',
                            '-webkit-transform': 'rotate(' + angle*(i) + 'deg)',
                            '-moz-transform': 'rotate(' + angle*(i) + 'deg)',
                            '-o-transform': 'rotate(' + angle*(i) + 'deg)',
                            '-ms-transform': 'rotate(' + angle*(i) + 'deg)',}

          this.fieldStyleNth[i] = {'transform': 'rotate(' + angle + 'deg)',
                                  '-webkit-transform': 'rotate(' + angle + 'deg)',
                                  '-moz-transform': 'rotate(' + angle + 'deg)',
                                  '-o-transform': 'rotate(' + angle + 'deg)',
                                  '-ms-transform': 'rotate(' + angle + 'deg)',
                                  'background-color': this.bgColorStyle[i],
                                  'color': this.fontColor[i]	}
        }
        console.log(this.fieldStyleNth);
      })
  }

}
