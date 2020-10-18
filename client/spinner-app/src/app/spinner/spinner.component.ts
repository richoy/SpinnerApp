import { Component, OnInit, ViewChild, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { Meta, MetaDefinition } from '@angular/platform-browser';
 
import { SpinnerService } from '../services/spinner.service';

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
  clicks: number = 1;
  degree: number;
  newDegree: number;
  extraDegree: number; 
  totalDegree: number;
  spiningRotate: any;

  @ViewChildren('wheelSec') wheelSecs: QueryList<any>;
  @ViewChild('txt') Text;
  @ViewChild('spin') spin;

  spinMovemente: any;

  //Results
  initialDegreesStart: any[] = [''];
  initialDegreesEnd: any[] = [''];
  degreesRotated: number = 0;
  resultingField: number = 0;
  ///

    //META TAGS
    title = 'Home Component Title'


  constructor( 
    private spinnerService: SpinnerService,
    private metaService:Meta) { 
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
        let angle = 360/this.SpinnerFields.length;
        for(let i=0; i<this.SpinnerFields.length; i++) { //Substitute backslashes for slashes
          this.SpinnerFields[i].image = this.SpinnerFields[i].image.replace(/\\/g, "/");
          this.SpinnerFields[i].image = this.API_IMAGE_URL + this.SpinnerFields[i].image.slice(14);
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

          this.initialDegreesStart[i] = angle*i
          this.initialDegreesEnd[i] = this.initialDegreesStart[i] + angle;
        }
      })
  }

  getHeaderFooter() {
    this.spinnerService.getHeaderFooter()
      .subscribe( headerFooter => {
        this.HeaderFooter = headerFooter[0];
        this.metaService.addTag({ name: 'description', content: this.HeaderFooter.pageDescription }); //Description
        console.log(this.HeaderFooter);
      });
  }

  rotate() {
    this.degree = 360*8;
    this.clicks = ++this.clicks;
    this.newDegree = this.degree * this.clicks;
    this.extraDegree = Math.floor(Math.random() * (360)) + 1;
    this.totalDegree = this.newDegree + this.extraDegree;

    let numberOfSpins = this.totalDegree/360;
    let fraction = numberOfSpins % 1
    this.degreesRotated = fraction*360;
    
    this.tilting();
    this.DeterminResult()
  }

  spining() {
    this.spiningRotate = { 'transform': 'rotate(-' + this.totalDegree + 'deg)'};
  }

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

      this.spining();

      var rectTwo = t.getBoundingClientRect();
      noY = rectTwo.top + document.body.scrollTop;
    });
  }


  DeterminResult() {
    for( let i=0; i<this.initialDegreesEnd.length; i++) {
      //console.log(this.initialDegreesEnd[0]);
      if (this.degreesRotated <= this.initialDegreesEnd[0]) {
        this.resultingField = i;
        break
      }
      else if ( this.degreesRotated > this.initialDegreesEnd[0] 
        && this.degreesRotated <= this.initialDegreesEnd[i] 
        && this.degreesRotated > this.initialDegreesEnd[i-1]) {
          this.resultingField = i;
      }
    }
    
    if (this.SpinnerFields[this.resultingField].isItEmail === true) {
        ///Code to result
    }
    else if (this.SpinnerFields[this.resultingField].isItEmail === false) {
        ///Code to result
    }

    console.log(this.resultingField);
    console.log(this.SpinnerFields[this.resultingField]);
  }
}