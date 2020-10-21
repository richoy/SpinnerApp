import { Component, OnInit, QueryList, ViewChildren, ElementRef, OnChanges } from '@angular/core';
import { FormBuilder,FormArray, FormGroup, Validators, FormControl } from '@angular/forms';
import { fromEvent} from 'rxjs';
import { map, debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { SpinnerCustomizerControllerService } from '../services/spinner-customizer-controller.service';
import { ImageService } from '../services/image.service';
import { CenterImageService } from '../services/center-image.service';
import { formSpinnerControl } from '../shared/form-spinner-controller';
import { ImageSnippet } from '../shared/ImageSnippet';

@Component({
  selector: 'app-customize-spinner',
  templateUrl: './customize-spinner.component.html',
  styleUrls: ['./customize-spinner.component.scss']
})
export class CustomizeSpinnerComponent implements OnInit {

  //Collapse menu
  public isMenuCollapsed = true;

  // For number of field dropdown
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
  percentageValues: number[] = [0];
  @ViewChildren('percentage') percentage: QueryList<any>;


  //CENTER IMAGE
  StringOfSpinnerCenter: String;
  SuccessSpinnerCenter: boolean;
  UnsuccessSpinnerCenter: boolean;
  CenterImageForm: FormGroup;
  selectedCenterFile: ImageSnippet;
  centerCopy: any;
  centerform: any;

  constructor(
    public formBuilder:FormBuilder,// For number of field dropdown
    private spinnerService: SpinnerCustomizerControllerService,// Form validations
    private imageService: ImageService,
    private centerImageService: CenterImageService
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
    // Sets default 6 boxes
    for (let i = 0; i < 6; i++) {
      this.addControl(i);
    }
    // For imageUpload / Text Field
    let i = 0;
    for (i=0; i<=this.items.length; i++) {
      this.itIsImageFile[i] = true;
    }
    // For imageUpload / Text Field

    // For number of field dropdown
    for (i=0; i<=this.items.length; i++) {
      this.itIsTextPopUp[i] = true;
    }
    // For number of field dropdown
    this.definingPercentage();
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
      color: ['', [Validators.required]],
    });

    SpinnerForm.valueChanges.subscribe( data => {
      this.onValueChanged(SpinnerForm, data);
    });
    this.onValueChanged(SpinnerForm);

    return SpinnerForm
    
  }
  SpinnerformErrors = {
    'percentage': '',
  };
  validationMessages = {
    'percentage': {
      'required': 'Percentage is required.',
      'pattern': 'Value must be a number',
      'min': 'Minumun possible value is 0%',
      'max': 'Maximum possible value is 100%'
    }
  }

  createFormFieldForCenterSpinnerImage() {
    this.CenterImageForm = this.formBuilder.group({
      centerImage: ['']
    });
  }

  MessageErrorChange(i) {
    console.log(i);
/*
    console.log(this.percentage.toArray());
    for(let i=0; i < this.percentage.toArray().length; i++) {

      //console.log(this.percentage.toArray());
    }*/
    fromEvent(this.percentage.toArray()[i].nativeElement, 'keyup')
      .pipe(map((event: any) => {
        console.log(event.target.value)
        if (event.target.value > 100) {
          this.isPercentageMoreThanHundred[i] = true;
          this.percentageValues[i] = event.target.value;
        } else if (event.target.value < 0) {
          this.isPercentageLessThanZero[i] = true;
          this.percentageValues[i] = event.target.value;
        } else if (event.target.value >= 0 && event.target.value <= 100) {
          this.isPercentageMoreThanHundred[i] = false;
          this.isPercentageLessThanZero[i] = false;
          this.percentageValues[i] = event.target.value;
        }
      }),
      debounceTime(400),
      distinctUntilChanged())
        .subscribe((value: any) => {
          console.log(value)
        });

/*
    this.percentage.toArray().forEach( element => {
      console.log(element.nativeElement)
      fromEvent(element.nativeElement, 'keyup').pipe(map((event: any) => {
        console.log(event.target.value)
        if (event.target.value > 100) {
          this.isPercentageMoreThanHundred[i] = true;
        } else if (event.target.value < 0) {
          this.isPercentageLessThanZero[i] = true;
        } else if (event.target.value >= 0 && event.target.value <= 100) {
          this.isPercentageMoreThanHundred[i] = false;
          this.isPercentageLessThanZero[i] = false;
          this.percentageValues[i] = event.target.value;
        }
      }),
      debounceTime(300),
      distinctUntilChanged()
      ).subscribe((value: any) => {
        console.log(value);
      });
    });*/

    console.log(this.isPercentageMoreThanHundred)
    console.log(this.isPercentageLessThanZero)
    console.log(this.percentageValues)

    //console.log(this.percentage._results)
    //fromEvent(this.percentage._results[i].nativeElement, 'keyup')
    

/*
    if(value <= 0 ) {
      this.isPercentageLessThanZero[i] = true
    } else if ( value >= 100) {
      this.isPercentageMoreThanHundred[i] = true
    }*/
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
  
  get spinnerArray(): FormArray {
		if ( this.spinnerForm) {
      return this.spinnerForm.get('spinnerArray') as FormArray;
    }
	}
  // For number of field dropdown
  onChange(i) {
    this.items.length = 0;   // eliminates defalut setting before adding other
    this.spinnerForm.reset();
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
      let counter = 0;
  
      this.spinnerArray.value.forEach(element => {
        let field = new formSpinnerControl(
          element.isItImage,
          element.image,
          element.textFieldOne,
          element.percentage,
          element.isItEmail,
          element.textPopUp,
          element.email,
          element.color
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

    }

    if (this.percentageSum === 100) {
      this.spinnerService.deleteSpinner().subscribe(() => {
        this.spinnerService.sendSpinner(spinner).subscribe((res) => {
          this.spinnerForm.reset();
          this.StringOfImageUpload = []; // Resets the StringOfImageUpload array
        }, err =>{
          throw new Error('Error Sending the information about the spinner');
        });
      }, err => {
        throw new Error('Error deleting the information of the previous spineer');
      });
    } else {
      throw new Error('Error Percentage must add up 100%');
    }
  }

  onSubmitCenterImage() {
    this.centerImageService.deleteImageCenter()
      .subscribe(() => {
        this.centerCopy = this.CenterImageForm.value;
        this.centerCopy.centerImage = this.StringOfSpinnerCenter.replace(/\\/g, "/");
        this.centerImageService.sendImageCenter(this.centerCopy)
        .subscribe(HFform => {
          this.centerform = HFform;
          console.log(this.centerform);
        }, err =>{
          throw new Error('Error Sending the information about the spinner');
        });
      this.CenterImageForm.reset();
      }, err => {
        throw new Error('Error deleting the information of the previous spineer');
      });
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
