import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray, FormGroup, Validator, Validators } from '@angular/forms';
import { throwError } from 'rxjs';
import { SpinnerCustomizerControllerService } from '../services/spinner-customizer-controller.service';
import { formSpinnerControl } from '../shared/form-spinner-controller';


@Component({
  selector: 'app-customize-spinner',
  templateUrl: './customize-spinner.component.html',
  styleUrls: ['./customize-spinner.component.scss']
})
export class CustomizeSpinnerComponent implements OnInit {

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

  constructor(
    public formBuilder:FormBuilder,// For number of field dropdown
    private spinnerService: SpinnerCustomizerControllerService ) // Form validations
    {       
    // Setting Form Array
    this.spinnerForm = this.formBuilder.group({
			spinnerArray: this.formBuilder.array(
				[],
				[Validators.required])
		});
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
        spinner.push(field);
      });
  
    }

    this.spinnerService.deleteSpinner().subscribe(() => {
      this.spinnerService.sendSpinner(spinner).subscribe(() => {
        this.spinnerForm.reset();
      }, err =>{
        throwError(err);
      });
    }, err => {
      throwError(err);
    });
  }

}
