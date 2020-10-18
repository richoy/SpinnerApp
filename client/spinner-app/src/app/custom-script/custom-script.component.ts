import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CustomScriptService } from '../services/custom-script.service';
import { ImageService } from '../services/image.service';

import { ImageSnippet } from '../shared/ImageSnippet';

@Component({
  selector: 'app-custom-script',
  templateUrl: './custom-script.component.html',
  styleUrls: ['./custom-script.component.scss']
})
export class CustomScriptComponent implements OnInit {
  
  public isMenuCollapsed = true;

  HeaderFooterForm: FormGroup;
  form: any;
  formCopy: any;
  errMess: string;

  selectedFile: ImageSnippet;
  StringOfImageUpload: string;
  SuccessfullyUpload: boolean;
  UnsuccessfullyUpload: boolean;

  formErrors = {
    'Header': '',
    'Footer': '',
    'PageTitle': '',
    'pageDescription': '',
    'favicon': ''
  };



  constructor( 
    private customScriptService: CustomScriptService,
    private imageService: ImageService,
    private fb: FormBuilder) {
      this.createForm();
     }

  ngOnInit(): void {
  }

  createForm() {
    this.HeaderFooterForm = this.fb.group({
      header: [''],
      footer: [''],
      pageTitle: [''],
      pageDescription: [''],
      favicon: ['']
    });

  }

  private onSuccess(path) {
    this.StringOfImageUpload = path;
    this.SuccessfullyUpload = true;
    this.UnsuccessfullyUpload = false; 
  }

  private onError() {
    this.UnsuccessfullyUpload = true; 
    this.SuccessfullyUpload = false;
  }


  processFile(image: any) {
    let files = image.srcElement.files;
    let file: File = files[0];
    let reader = new FileReader();
    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file);
      this.imageService.uploadImage(this.selectedFile.file)
        .subscribe((res) => {
          this.onSuccess(res.path);
        },
        (err) => {
          this.onError()
          throw new Error(err);
        });
    });
    reader.readAsDataURL(file);
}

  onSubmit() {
    this.customScriptService.deleteHeaderFooter().subscribe(()=> {
      this.formCopy = this.HeaderFooterForm.value;
      this.formCopy.favicon = this.StringOfImageUpload.replace(/\\/g, "/");
      console.log(this.formCopy);
      this.customScriptService.sendHeaderFooter(this.formCopy)
        .subscribe(HFform => {
          this.form = HFform;
          console.log(this.form);
        }, err =>{
          throw new Error('Error Sending the information about the spinner');
        });
      this.HeaderFooterForm.reset();
    }, err => {
      throw new Error('Error deleting the information of the previous spineer');
    });

  }

}
