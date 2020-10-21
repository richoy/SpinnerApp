import { Component, OnInit, ViewChild, QueryList, ViewChildren, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

import { SpinnerService } from '../services/spinner.service';
import { HeaderFooterService } from '../services/header-footer.service';
import { EmailsService } from '../services/emails.service';
import { CenterImageService } from '../services/center-image.service';

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
  FinalResult: any;

  sendEmailForm: FormGroup;
  form: any;
  formCopy: any;
  errMess: string;
  ///

  //Center image
  centerImage: any;

  /// Modal results
  validForm = true;
  closeResult = ''; 
  @ViewChild('ResultEmail') ResultEmail;
  @ViewChild('ResultText') ResultText;

  constructor( 
    private spinnerService: SpinnerService,
    private headerFooterService: HeaderFooterService,
    private emailSevice: EmailsService,
    private modalService: NgbModal,
    private centerImageService: CenterImageService,
    private fb: FormBuilder ) { 
      this.createForm();
    }

  ngOnInit(): void {
    this.getHeaderFooter();
    this.getSpinner();
    this.getImageCenter();
  }

  getSpinner(): void {
    this.spinnerService.getSpinner()
      .subscribe( spinnerFields => {
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

  getImageCenter() {
    this.centerImageService.getImageCenter()
      .subscribe(centerImage => {
        this.centerImage = centerImage[0];
        this.centerImage.centerImage = this.API_IMAGE_URL + this.centerImage.centerImage.slice(14);
        //console.log(centerImage);
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


  ExposingResult() {

    //console.log(this.SpinnerFields)

    if (this.SpinnerFields[this.resultingField].isItEmail === true) {
      setTimeout( () => {
        this.open(this.ResultEmail)
      }, 6500);
  
    }
    else if (this.SpinnerFields[this.resultingField].isItEmail === false) {
      setTimeout( () => {
        this.open(this.ResultText)
      }, 6500);  
    }
  }

  createForm() {
    this.sendEmailForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      emailAddress: ['', [Validators.required, Validators.email]],
      result: ['']
    });

  }

  onSubmit() {
    if(this.sendEmailForm.status === "VALID") {
      this.formCopy = this.sendEmailForm.value;
      this.formCopy.result = this.FinalResult.textPopUp;
      
      this.emailSevice.sendEmails(this.formCopy)
        .subscribe(emailForm => {
          this.form = emailForm;
          this.modalService.dismissAll();
          this.validForm = true;
        }, err =>{
          throw new Error('Error Sending the information about the spinner');
        });
      this.sendEmailForm.reset();
    } else {
      this.validForm = false;
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
  
      this.resultingField = index;
      //console.log(index);

      this.FinalResult = this.SpinnerFields[index]
      //console.log(this.FinalResult)
    }


    // Modal results
    open(content) {
      this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }

    private getDismissReason(reason: any): string {
      if (reason === ModalDismissReasons.ESC) {
        return 'by pressing ESC';
      } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
        return 'by clicking on a backdrop';
      } else {
        return `with: ${reason}`;
      }
    }
    ///////

  }