import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray, FormGroup, Validator, Validators } from '@angular/forms';
import { SpinnerCustomizerControllerService } from '../services/spinner-customizer-controller.service';
import { formSpinnerControl } from '../shared/form-spinner-controller';


@Component({
  selector: 'app-customize-spinner',
  templateUrl: './customize-spinner.component.html',
  styleUrls: ['./customize-spinner.component.scss']
})
export class CustomizeSpinnerComponent implements OnInit {

  // For number of field dropdown
  name = 'Angular';
  items: any[] = [];
  textBoxFormGroup: FormArray;
  textBoxFormArray: FormArray;
  controllerForm: formSpinnerControl;
  controllerFormCopy: formSpinnerControl;
  // For number of field dropdown

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
/*
  formErrors = {
    'percentage': '',
    'resultText': '',
    'resultEmail': '',
  };

  validationMessages = {
    'percentage': {
      'required': 'Percentage is required.',
      'pattern': 'Must contain only numbers.',
      'min': 'Minimun value must be at least 0%.',
      'max': 'Maximun value can not exceed 100%.'
    },
    'resultText': {
      'required': 'Text field is required.'
    },
    'resultEmail': {
      'required': 'Email is required.',
      'email': 'Email not in valid format.'
    }
  };
  // Form validations
*/
  constructor(
    public formBuilder:FormBuilder,// For number of field dropdown
    private spinnerCustomizerControllerService: SpinnerCustomizerControllerService ) // Form validations
    {       
    // For number of field dropdown
    this.textBoxFormGroup = this.formBuilder.array([]);
    this.addControl(0);
    this.addControl(1);
    // For number of field dropdown
   }

  ngOnInit(): void {
    this.items.length = 6;  // Sets default 6 boxes

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

  // Form validations:
  /*
  createForm(){
    this.textBoxFormGroup = this.formBuilder.array([{
      ImageOption: [''],
      imageFile: [''], //Check later
      textField: [''],
      percentage: [0, [Validators.required, Validators.pattern, Validators.min(2), Validators.max(100)]],
      resultOption: [''],
      resultText: [''],
      resultEmail: ['', [Validators.email]],
      bgColor: ['']
    }]);

    this.textBoxFormGroup.valueChanges
      .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();
  }

  /*
  onValueChanged(data?: any) {
    if (!this.textBoxFormGroup) {return;}
    const form = this.textBoxFormGroup;
    for( const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for ( const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
*/

  // For number of field dropdown
  onChange(i) {
    this.items.length = 0;   // eliminates defalut setting before adding other
    while(this.textBoxFormGroup.length > 0) {
      this.items.pop();
      this.textBoxFormGroup.removeAt(0);
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
    this.textBoxFormGroup.push(this.formBuilder.control(''));
  }
  // For number of field dropdown

  //For image text selection
  onChangeImage(option, i) {
      if ( option === 'image' ) {
        this.itIsImageFile[i] = true;
        this.itIsTextField[i] = false;
      }
      else if( option === 'text' ) {
        this.itIsImageFile[i] = false;
        this.itIsTextField[i] = true;
      }
      console.log(this.itIsImageFile);
      console.log(this.itIsTextField)
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
    this.controllerFormCopy = this.textBoxFormGroup.value;
    //this.spinnerVisible = true;
    this.spinnerCustomizerControllerService.submitForm(this.controllerFormCopy)
      .subscribe(feedback =>{ setTimeout(() => {
        this.controllerForm = feedback; 
        //this.spinnerVisible = false; 
        console.log(this.controllerForm);
        setTimeout(() => this.controllerForm = null, 5000);}, 2000);},
        errmess => this.errMess = <any>errmess);
    this.textBoxFormGroup.reset();
  }

}



