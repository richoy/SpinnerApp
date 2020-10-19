import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray, FormGroup, Validators, FormControl } from '@angular/forms';
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

  }

 

	createSpFormGroup() {
		return this.formBuilder.group({
      isItImage: [true, [Validators.required]],
      file: [''],
      textFieldOne:[''],
      percentage: ['', [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
      isItEmail: [true, [Validators.required]],
      textPopUp: [''],
      emails: [''],
      color: ['', [Validators.required]],
		})
  }

  createFormFieldForCenterSpinnerImage() {
    this.CenterImageForm = this.formBuilder.group({
      centerImage: ['']
    });
  }

  submitCenterImage() {

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

      console.log(this.percentageSum)
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
        console.log(this.centerCopy);
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
