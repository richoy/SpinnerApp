import { Component, OnInit, QueryList, ViewChildren, ViewChild, ElementRef, OnChanges } from '@angular/core';
import { FormBuilder,FormArray, FormGroup, Validators, FormControl } from '@angular/forms';
import { Observable, fromEvent, merge} from 'rxjs';
import { map, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { SpinnerCustomizerControllerService } from '../services/spinner-customizer-controller.service';
import { SpinnerService } from '../services/spinner.service';
import { ImageService } from '../services/image.service';
import { CenterImageService } from '../services/center-image.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { formSpinnerControl } from '../shared/form-spinner-controller';
import { ImageSnippet } from '../shared/ImageSnippet';
import { visibility, expand } from '../animations/app.animations'           

@Component({
  selector: 'app-customize-spinner',
  templateUrl: './customize-spinner.component.html',
  styleUrls: ['./customize-spinner.component.scss'],
  animations: [
    visibility(),
    expand()
  ]
})
export class CustomizeSpinnerComponent implements OnInit {

  DidModalOpen:boolean = false;
  //Collapse menu
  public isMenuCollapsed = true;

  // For number of field dropdown
  @ViewChild('numberOfFields') numberOfFields;
  
  items: any[] = [];

  spinnerForm: FormGroup;
  submitPressed = false;

  // For imageUpload / Text Field
  itIsImageFile: boolean[] = [false];
  itIsTextField: boolean[] = [false];
  // For imageUpload / Text Field

  // For results dropdown
  itIsTextPopUp: boolean[] = [false];
  itIsEmailPopUp: boolean[] = [false];
  // For results dropdown

  // Form validations:
  //controllerForm: FormGroup;
  errMess: string;

  // For image Upload
  selectedFile: ImageSnippet;
  StringOfImageUpload: UploadFile[] = [];
  SuccessfullyUpload: boolean[] = [];
  UnsuccessfullyUpload: boolean[] = [];

  //For percentage 100%
  totalPercentage: any[] = [];
  percentageSum: number;
  isPercentageLessThanZero: boolean[] =[ false];
  isPercentageMoreThanHundred: boolean[] = [false];
  SumOfPercentageEqualHundred: boolean = false;
  SumOfPercentageMoreThanHundred: boolean=false;
  percentageValues: number[] = [];
  @ViewChildren('percentage') percentage: QueryList<any>;


  //CENTER IMAGE
  StringOfSpinnerCenter: String;
  SuccessSpinnerCenter: boolean;
  UnsuccessSpinnerCenter: boolean;
  CenterImageForm: FormGroup;
  selectedCenterFile: ImageSnippet;
  centerCopy: any;
  centerform: any;

  //Submiting

  sucessFormSubmition: boolean = false;
  sucessCenterImageSubmition: boolean = false;
  unsuccessSendingForm: boolean = false;

  //Get spinner stored data
  IsPreviousDataStored: boolean = false;
  SpinnerFieldsStoreData: any;
  
  closeResult = '';
  @ViewChild('modal') modal;

  constructor(
    public formBuilder:FormBuilder,// For number of field dropdown
    private spinnerService: SpinnerCustomizerControllerService,// Form validations
    private imageService: ImageService,
    private centerImageService: CenterImageService,
    private getDataSpinnerService: SpinnerService,
    private modalService: NgbModal
     ) {       
    // Setting Form Array
    this.spinnerForm = this.formBuilder.group({
			spinnerArray: this.formBuilder.array(
				[],
				[Validators.required])
    });
    
    this.createFormFieldForCenterSpinnerImage();
   }

  ngOnInit(): void {

    for (let i = 0; i < 6; i++) {
      this.addControl(i);
    }
    
    this.getSpinnerStoredInfo();
    
  
    // For number of field dropdown
    this.definingPercentage();
  }

  getSpinnerStoredInfo() {
    this.getDataSpinnerService.getSpinner()
      .subscribe( data => {
        

        this.IsPreviousDataStored = true;
        this.SpinnerFieldsStoreData = data;

        //Not used elements of the Data Array
        for(let i=0; i<this.SpinnerFieldsStoreData.length; i++) {
          this.SpinnerFieldsStoreData[i]['file'] = this.SpinnerFieldsStoreData[i]['image'];
          delete this.SpinnerFieldsStoreData[i]['image'];
          delete this.SpinnerFieldsStoreData[i]['createdAt'];
          delete this.SpinnerFieldsStoreData[i]['updatedAt'];
          delete this.SpinnerFieldsStoreData[i]['_id'];
          delete this.SpinnerFieldsStoreData[i]['__v'];
          delete this.SpinnerFieldsStoreData[i]['email'];
        }


        // Getting Number of fields
        let GetDOMNumberOfFields = this.numberOfFields.nativeElement[this.SpinnerFieldsStoreData.length - 2];
        GetDOMNumberOfFields.setAttribute('selected', 'selected');

        for (let i = 0; i < this.SpinnerFieldsStoreData.length; i++) {
          this.addControl(i);
        }
        this.onChange(GetDOMNumberOfFields.value);

        //Setting Values
        this.setValuesofBackendSpinner(this.SpinnerFieldsStoreData);
        for(let i=0; i<this.SpinnerFieldsStoreData.length; i++) {
          
          if (this.SpinnerFieldsStoreData[i].isItImage == true) {
            this.onSuccess(i, this.SpinnerFieldsStoreData[i].file)
          } else if (this.SpinnerFieldsStoreData[i].isItImage == false) {
            this.itIsImageFile[i] = false;
            this.itIsTextField[i] = true;
            this.SuccessfullyUpload[i] = false;
            this.UnsuccessfullyUpload[i] = false;
          }

          this.percentageValues[i] = this.SpinnerFieldsStoreData[i].percentage;
        }
        this.checkfullpercentage()
      },
      (err) => {

        this.IsPreviousDataStored = false;
        
        for (let i = 0; i < 6; i++) {
          this.addControl(i);
        }

            // For imageUpload / Text Field
        let i = 0;
        for (i=0; i<=this.items.length; i++) {
          this.itIsImageFile[i] = true;
          this.itIsTextField[i] = false;
        }
        // For imageUpload / Text Field

        // For number of field dropdown
        for (i=0; i<=this.items.length; i++) {
          this.itIsTextPopUp[i] = true;
      }

        throw new Error(err);
      });
  }

  setValuesofBackendSpinner(data) {
    this.spinnerArray.patchValue(data);
  } 

	createSpFormGroup() {
    let SpinnerForm = this.formBuilder.group({
      isItImage: [true, [Validators.required]],
      file: [''],
      textFieldOne:[''],
      percentage: ['', [Validators.required, Validators.pattern(/^[0-9]\d*$/), Validators.min(0), Validators.max(100)]],
      isItEmail: [true, [Validators.required]],
      textPopUp: [''],
      emails: [''],
      bgColor: ['', [Validators.required]],
    });

    SpinnerForm.valueChanges.subscribe( data => {
      this.onValueChanged(SpinnerForm, data);
    });
    this.onValueChanged(SpinnerForm);

    return SpinnerForm
    
  }
  SpinnerformErrors = {
    'isItImage': '',
    'percentage': '',
    'isItEmail': '',
    'bgColor': '',
  };
  validationMessages = {
    'isItImage': {
      'required': 'image or text is required.'
    },
    'percentage': {
      'required': 'Percentage is required.',
      'pattern': 'Value must be a number',
      'min': 'Minumun possible value is 0%',
      'max': 'Maximum possible value is 100%'
    },
    'isItEmail': {
      'required': 'is it email? is required.'
    },
    'bgColor': {
      'required': 'color is required.'
    }
  }

  createFormFieldForCenterSpinnerImage() {
    this.CenterImageForm = this.formBuilder.group({
      centerImage: ['']
    });
  }

  get spinnerArray(): FormArray {
		if ( this.spinnerForm) {
      return this.spinnerForm.get('spinnerArray') as FormArray;
    }
  }



  MessageErrorChange(i) {

    const keyPressEvent$  = fromEvent(this.percentage.toArray()[i].nativeElement, 'keypress');
    const keyDownEvent$  = fromEvent(this.percentage.toArray()[i].nativeElement, 'keydown');
    const keyupEvent$  = fromEvent(this.percentage.toArray()[i].nativeElement, 'keyup');
    const inputEvent$  = fromEvent(this.percentage.toArray()[i].nativeElement, 'input');
    const changeEvent$  = fromEvent(this.percentage.toArray()[i].nativeElement, 'change');
    const focusEvent$  = fromEvent(this.percentage.toArray()[i].nativeElement, 'focus');
    const focusoutEvent$  = fromEvent(this.percentage.toArray()[i].nativeElement, 'blur');
    
    const allEvents$ = merge(   
      changeEvent$,
      inputEvent$,
      keyDownEvent$,
      keyPressEvent$,   
      keyupEvent$,
      focusEvent$,
      focusoutEvent$
    );
    
    allEvents$
      .pipe(
        map((event: any) => {

        let value = Number(event.target.value);
        if (value > 100) {
          event.target.value = 100;
          this.isPercentageMoreThanHundred[i] = true;
          this.percentageValues[i] = value;
        } else if (value < 0) {
          event.target.value = 0;
          this.isPercentageLessThanZero[i] = true;
        } else if (value >= 0 && value <= 100) {
          this.isPercentageMoreThanHundred[i] = false;
          this.isPercentageLessThanZero[i] = false;
          this.percentageValues[i] = value;
        }

        this.checkfullpercentage()
      }),
      debounceTime(1)).subscribe();
      
      this.DidModalOpen = false;
  }

  checkfullpercentage(){
    this.percentageSum = this.percentageValues.reduce(function(a, b){
      return a + b;
    }, 0);
    if(this.percentageSum === 100) {
      this.SumOfPercentageEqualHundred = true;
      this.SumOfPercentageMoreThanHundred = false;
    } else if(this.percentageSum <= 100 ) {
      this.SumOfPercentageEqualHundred = false;
      this.SumOfPercentageMoreThanHundred = true
    } else if(this.percentageSum > 100) {
      this.SumOfPercentageMoreThanHundred = true
      this.SumOfPercentageEqualHundred = false;
      if(this.DidModalOpen === false) {
        this.open(this.modal);
        this.DidModalOpen = true;
      }
    }
  }

  definingPercentage() {
    for (let i=0; i<this.items.length; i++) {
      this.isPercentageMoreThanHundred.length = i
      this.percentageValues.length = i
      this.isPercentageLessThanZero.length = i;
      this.isPercentageMoreThanHundred[i] = false;
      this.isPercentageLessThanZero[i]=false
      this.percentageValues[i] = 0;
    }
  }



  onValueChanged(SpinnerForm ,data?: any) {
    if (!SpinnerForm) {return;}
    const form = SpinnerForm;
    for (const field in this.SpinnerformErrors) {
      if (this.SpinnerformErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.SpinnerformErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.SpinnerformErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

   //Image Upload
  private onSuccess(index, path) {
    this.StringOfImageUpload.push(new UploadFile(index, path));
    this.SuccessfullyUpload[index] = true;
    this.UnsuccessfullyUpload[index] = false; 
  }

  private onError(index) {
    this.UnsuccessfullyUpload[index] = true; 
    this.SuccessfullyUpload[index] = false;
  }

  processFile(image: any, index) {
      let files = image.srcElement.files;
      let file: File = files[0];
      let reader = new FileReader();
      reader.addEventListener('load', (event: any) => {
        this.selectedFile = new ImageSnippet(event.target.result, file);
        this.imageService.uploadImage(this.selectedFile.file)
          .subscribe((res) => {
            this.onSuccess(index, res.path);
          },
          (err) => {
            this.onError(index)
            throw new Error(err);
          });
      });
      reader.readAsDataURL(file);
  }


  //Center spinner image

  private onSuccessCenter(path) {
    this.StringOfSpinnerCenter = path;
    this.SuccessSpinnerCenter = true;
    this.UnsuccessSpinnerCenter = false; 
  }

  private onErrorCenter() {
    this.UnsuccessSpinnerCenter = true; 
    this.SuccessSpinnerCenter = false;
  }

  ProcessCenterImage(image: any) {
    let files = image.srcElement.files;
    let file: File = files[0];
    let reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.selectedCenterFile = new ImageSnippet(event.target.result, file);
      this.imageService.uploadImage(this.selectedCenterFile.file)
        .subscribe((res) => {
          this.onSuccessCenter(res.path);
        },
        (err) => {
          this.onErrorCenter()
          throw new Error(err);
        });
    });
    reader.readAsDataURL(file);
  }

  /////
  


  // For number of field dropdown
  onChange(i) {
    this.items.length = 0;   // eliminates defalut setting before adding other
    this.spinnerForm.reset();

    for( let index = 0; index < i; index++) {
      this.SuccessfullyUpload[index] = false;
      this.UnsuccessfullyUpload[index] = false;
      this.itIsTextField[index] = false;
    }

    while(this.spinnerArray.length > 0) {
      this.items.pop();
      this.deleteSpinnerField(0);
    }
    while(i > 0) {
      this.addControl(i);
      i--;
    }
    for (i=0; i<=this.items.length; i++) {
      this.itIsImageFile[i] = true;
    }
    for (i=0; i<=this.items.length; i++) {
      this.itIsTextPopUp[i] = true;
    }
    this.definingPercentage();
    
  }
  addControl(i) {
    this.items.push({id: i.toString()})
		let fg = this.createSpFormGroup();
		if(this.spinnerArray) {
      this.spinnerArray.push(fg);
    }
  }

  deleteSpinnerField(idx: number) {
		this.spinnerArray.removeAt(idx);
  }

  deleteImage() {
    this.centerImageService.deleteImageCenter()
      .subscribe(() => {
        
      }, err => {
        throw new Error('Error deleting the information of the previous spineer');
      });
  }
  
  // For number of field dropdown

  //For image text selection
  onChangeImage(option, i) {
      if ( option === "0: true" ) {
        this.itIsImageFile[i] = true;
        this.itIsTextField[i] = false;
        
      }
      else if( option === "1: false") {
        this.itIsImageFile[i] = false;
        this.itIsTextField[i] = true;
      }
  }
  //For image text selection

  // For number of field dropdown
  onChangeResult(option, i) {
    if ( option === 'text' ) {
      this.itIsTextPopUp[i] = true;
      this.itIsEmailPopUp[i] = false;
    }
    else if( option === 'email' ) {
      this.itIsTextPopUp[i] = false;
      this.itIsEmailPopUp[i] = true;
    }
}
  // For number of field dropdown

  onSubmit() {
    let spinner: Array<formSpinnerControl> = [];
    this.submitPressed = true;
    
    // if a field outside the array is added, change this to this.spinnerForm.value
    if (this.spinnerForm.status === "VALID") {

      if (this.percentageSum === 100) {
        
      let counter = 0;
  
      this.spinnerArray.value.forEach(element => {

        if( element.bgColor === '') {
          element.bgColor = '#000000';
        }

        let field = new formSpinnerControl(
          element.isItImage,
          element.image,
          element.textFieldOne,
          element.percentage,
          element.isItEmail,
          element.textPopUp,
          element.email,
          element.bgColor
        )

        this.totalPercentage[counter] = element.percentage;

        this.StringOfImageUpload.forEach((file)=>{
          if(file.index == counter){
            field.image = file.image;
          } 
        })
        spinner.push(field);
        counter++;
      });

      this.percentageSum = this.totalPercentage.reduce(function(a, b){
        return a + b;
      }, 0);

      this.sucessFormSubmition = true;

      this.spinnerService.deleteSpinner().subscribe(() => {
          this.spinnerService.sendSpinner(spinner).subscribe((res) => {
            setTimeout( () => {
              this.sucessFormSubmition = false;
            }, 2000);
            //this.spinnerForm.reset();
            //this.StringOfImageUpload = []; // Resets the StringOfImageUpload array
          }, err =>{
            throw new Error('Error Sending the information about the spinner');
          });
        }, err => {
          throw new Error('Error deleting the information of the previous spineer');
        });
      } else {
        throw new Error('Error Percentage must add up 100%');
      }
    } else if (this.spinnerForm.status === "INVALID") {

      this.unsuccessSendingForm = true;
      setTimeout( () => {
        this.unsuccessSendingForm = false;
      }, 2000);
    };
  }

  //sucessCenterImageSubmition

  onSubmitCenterImage() {
    this.sucessCenterImageSubmition = true;
    this.centerImageService.deleteImageCenter()
      .subscribe(() => {
        this.centerCopy = this.CenterImageForm.value;
        this.centerCopy.centerImage = this.StringOfSpinnerCenter.replace(/\\/g, "/");
        this.centerImageService.sendImageCenter(this.centerCopy)
        .subscribe(HFform => {
          setTimeout( () => {
            this.sucessCenterImageSubmition = false;
          }, 2000);
          this.centerform = HFform;
        }, err =>{
          throw new Error('Error Sending the information about the spinner');
        });
      this.CenterImageForm.reset();
      }, err => {
        throw new Error('Error deleting the information of the previous spineer');
      });
  }

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

}

export class UploadFile {
  index: number;
  image: any;

  constructor(idx, fil){
    this.index = idx;
    this.image = fil;
  }
}
