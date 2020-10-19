import { Component, OnInit, ViewChild, QueryList, ViewChildren, ElementRef } from '@angular/core';
 
import { SpinnerService } from '../services/spinner.service';
import { HeaderFooterService } from '../services/header-footer.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent implements OnInit {


  API_IMAGE_URL = '/api/v1/imageUpload/';
  SpinnerFields: any;
  HeaderFooter: any;
  bgColorStyle: any[] = ['']; // Backgorund color
  fontColor: any[] = ['']; // Font Color

  fieldStyleNth: any[] = [''] //Individual field style
  holder: any[] = ['']

  state: string = 'default';

  //Animations
  clicks: number = 0;
  newDegree: number;
  extraDegree: number; 
  totalDegree: number = 0;
  spiningRotate: any;

  @ViewChildren('wheelSec') wheelSecs: QueryList<any>;
  @ViewChild('txt') Text;
  @ViewChild('spin') spin;

  spinMovemente: any;

  //Results
  angle: number;
  initialDegreesStart: any[] = [''];
  initialDegreesEnd: any[] = [''];
  degreesRotated: number = 0;
  resultingField: number = 0;
  ///

  constructor( 
    private spinnerService: SpinnerService,
    private headerFooterService: HeaderFooterService ) { 
    }

  ngOnInit(): void {
    this.getHeaderFooter();
    this.getSpinner();
  }

  getSpinner(): void {
    this.spinnerService.getSpinner()
      .subscribe( spinnerFields => {
        //spinnerFields.image = spinnerFields.image.replace("\", "/");
        this.SpinnerFields = spinnerFields;
        this.angle = 360/this.SpinnerFields.length;
        for(let i=0; i<this.SpinnerFields.length; i++) { //Substitute backslashes for slashes
          this.SpinnerFields[i].image = this.SpinnerFields[i].image.replace(/\\/g, "/");
          this.SpinnerFields[i].image = this.API_IMAGE_URL + this.SpinnerFields[i].image.slice(14);
          this.bgColorStyle[i] = this.SpinnerFields[i].bgColor; // Backgorund color
          this.fontColor[i] = this.spinnerService.invertColor(this.bgColorStyle[i]); //Font Color
          this.holder[i] = {'transform': 'rotate(' + this.angle*(i) + 'deg)',
                            '-webkit-transform': 'rotate(' + this.angle*(i) + 'deg)',
                            '-moz-transform': 'rotate(' + this.angle*(i) + 'deg)',
                            '-o-transform': 'rotate(' + this.angle*(i) + 'deg)',
                            '-ms-transform': 'rotate(' + this.angle*(i) + 'deg)',}

          this.fieldStyleNth[i] = {'transform': 'rotate(' + this.angle + 'deg)',
                                  '-webkit-transform': 'rotate(' + this.angle + 'deg)',
                                  '-moz-transform': 'rotate(' + this.angle + 'deg)',
                                  '-o-transform': 'rotate(' + this.angle + 'deg)',
                                  '-ms-transform': 'rotate(' + this.angle + 'deg)',
                                  'background-color': this.bgColorStyle[i],
                                  'color': this.fontColor[i]	}

          this.initialDegreesStart[i] = this.angle*i
          this.initialDegreesEnd[i] = this.initialDegreesStart[i] + this.angle;
        }
      })
  }

  getHeaderFooter() {
    this.headerFooterService.getHeaderFooter()
      .subscribe( headerFooter => {
        this.HeaderFooter = headerFooter[0];
      });
  }

  rotate() {
    this.getSpinner();
    let degreeSpinn = 360*8;
    this.clicks = ++this.clicks; ////
    this.newDegree = degreeSpinn * this.clicks;  ////

    this.CalculateDegreesRotated()

    this.totalDegree = this.newDegree + this.extraDegree;
    
    this.spining();

    this.ExposingResult()
  }

  spining() {
    this.spiningRotate = { 'transform': 'rotate(-' + this.totalDegree + 'deg)'};
  }

  /*
  tilting() {
    
    this.wheelSecs.forEach( (wheelSec) => {
      var t = wheelSec.nativeElement;
      var noY = 0;
      var c = 0;
      var n = 700;
      var interval = setInterval(() => {
        c = c++;
        if (c === n) { 
          clearInterval(interval);				
        }	
        var rect = t.getBoundingClientRect();
        var aoY = {
          top: rect.top + document.body.scrollTop
        }
        this.Text.innerHTML = aoY;
				if(aoY.top < 23.89){
          this.spinMovemente = {'-webkit-animation': 'hh 0.1s',
                                'animation': 'hh 0.1s'}
					setTimeout(() => { 
            this.spinMovemente = ''
					}, 100);	
				}
      }, 10);


      var rectTwo = t.getBoundingClientRect();
      noY = rectTwo.top + document.body.scrollTop;
    });
  }*/


  ExposingResult() {

    if (this.SpinnerFields[this.resultingField].isItEmail === true) {
        ///Code to result
    }
    else if (this.SpinnerFields[this.resultingField].isItEmail === false) {
        ///Code to result
    }
  }

  CalculateDegreesRotated() {
    let DegreesArray = [];
    let index, sum = 0
    let random = Math.random();
    let random2 = Math.random();

    for( index = 0; index < this.SpinnerFields.length; index++) {
      sum += this.SpinnerFields[index].percentage/100;
      DegreesArray[index] = sum;
    }

    for ( index = 0; random < DegreesArray.length && random >= DegreesArray[index]; index++);

    this.extraDegree = (this.initialDegreesEnd[index] - this.angle)
      + Math.floor(random2 * (this.initialDegreesEnd[index] - (this.initialDegreesEnd[index] - this.angle)-1));
  
      console.log(index);
      console.log(this.extraDegree);
      console.log(this.initialDegreesEnd[index] - this.angle);
      console.log(Math.floor(random2  *  (this.initialDegreesEnd[index] - (this.initialDegreesEnd[index] - this.angle))))
      console.log(this.initialDegreesEnd[index]);

    }
  }