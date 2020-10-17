import { Component, OnInit, ViewChild, QueryList, ViewChildren, ElementRef } from '@angular/core';

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
      })
  }

  rotate() {
    this.degree = 360*8;
    this.clicks = ++this.clicks;
    this.newDegree = this.degree * this.clicks;
    this.extraDegree = Math.floor(Math.random() * (360)) + 1;
    this.totalDegree = this.newDegree + this.extraDegree;


    this.spining();
    this.tilting();
  }

  spining() {
    this.spiningRotate = { 'transform': 'rotate(' + this.totalDegree + 'deg)'};
  
  /*
    $('#wheel .sec').each(function(){
			var t = $(this);
			var noY = 0;
			
			var c = 0;
			var n = 700;	
			var interval = setInterval(function () {
				c++;				
				if (c === n) { 
					clearInterval(interval);				
				}	
					
				var aoY = t.offset().top;
				$("#txt").html(aoY);
				console.log(aoY);
				
				/*23.7 is the minumum offset number that 
				each section can get, in a 30 angle degree.
				So, if the offset reaches 23.7, then we know
				that it has a 30 degree angle and therefore, 
				exactly aligned with the spin btn
				if(aoY < 23.89){
					console.log('<<<<<<<<');
					$('#spin').addClass('spin');
					setTimeout(function () { 
						$('#spin').removeClass('spin');
					}, 100);	
				}
			}, 10);
			
			$('#inner-wheel').css({
				'transform' : 'rotate(' + totalDegree + 'deg)'			
			});
		 
			noY = t.offset().top;
			
		});
	*/
  
  
  
  }

  tilting() {
    this.wheelSecs.forEach( (wheelSec) => {
      console.log(wheelSec);
      var t = wheelSec.nativeElement.offsetHeight;
      console.log(t);
      var noY = 0;
      var c = 0;
      var n = 700;
      var interval = setInterval(() => {
        c = c++;
        if (c === n) { 
          clearInterval(interval);				
        }	
        let i = 0;
        var rect = t.getBoundingClientRect();
        i = i+1;
        console.log(rect);/*
        var aoY = {
          top: rect.top + document.body.scrollTop
        }
        this.Text.innerHTML = aoY;*/
      })
    });
  }

}