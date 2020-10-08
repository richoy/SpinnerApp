import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray } from '@angular/forms';

@Component({
  selector: 'app-customize-spinner',
  templateUrl: './customize-spinner.component.html',
  styleUrls: ['./customize-spinner.component.scss']
})
export class CustomizeSpinnerComponent implements OnInit {

  // For number of field dropdown
  name = 'Angular';
  items: any[] = [];
  textBoxFormGroup :FormArray
  // For number of field dropdown

  // For imageUpload / Text Field
  itIsImageFile: boolean[] = [false];
  itIsTextField: boolean[] = [false];
  // For imageUpload / Text Field

  // For results dropdown
  itIsTextPopUp: boolean[] = [false];
  itIsEmailPopUp: boolean[] = [false];
    // For results dropdown

  constructor(public formBuilder:FormBuilder ) {       // For number of field dropdown
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

}
