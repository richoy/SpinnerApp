import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomScriptService } from '../services/custom-script.service';
import { ImageService } from '../services/image.service';
import { ImageSnippet } from '../shared/ImageSnippet';
import { expand } from '../animations/app.animations';

@Component({
  selector: 'app-custom-script',
  templateUrl: './custom-script.component.html',
  styleUrls: ['./custom-script.component.scss'],
  animations: [
    expand()
  ]
})
export class CustomScriptComponent implements OnInit {


  HeaderFooterForm: FormGroup;
  form: any;
  formCopy: any;
  errMess: string;

  selectedFile: ImageSnippet;
  StringOfImageUpload: string;
  SuccessfullyUpload: boolean;
  UnsuccessfullyUpload: boolean;

  formErrors = {
    'header': '',
    'footer': '',
    'pageTitle': '',
    'pageDescription': ''
  };

  validationMessages = {
    'header': {
      'required': 'Header is required.'
    },
    'footer': {
      'required': 'Footer is required.'
    },
    'pageTitle': {
      'required': 'Title is required.',
    },
    'pageDescription': {
      'required': 'Description is required'
    }
  };


  //Submition

  FormSuccessfullySend: boolean = false;


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
      header: ['', [Validators.required]],
      footer: ['', [Validators.required]],
      pageTitle: ['', [Validators.required]],
      pageDescription: ['', [Validators.required]],
      favicon: ['']
    });
    this.HeaderFooterForm.valueChanges
    .subscribe(data => this.onValueChanged(data));

    this.onValueChanged(); // (re)set validation messages now
  }

  onValueChanged(data?: any) {
    if (!this.HeaderFooterForm) { return; }
    const form = this.HeaderFooterForm;
    for (const field in this.formErrors) {
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
    this.FormSuccessfullySend = true;
    this.customScriptService.deleteHeaderFooter().subscribe(()=> {
      this.formCopy = this.HeaderFooterForm.value;
      this.formCopy.favicon = this.StringOfImageUpload.replace(/\\/g, "/");
      this.customScriptService.sendHeaderFooter(this.formCopy)
        .subscribe(HFform => {
          this.form = HFform;
          setTimeout( () => {
          this.FormSuccessfullySend = false
          },2000);
        }, err =>{
          throw new Error('Error Sending the information about the spinner');
        });
      this.HeaderFooterForm.reset();
    }, err => {
      throw new Error('Error deleting the information of the previous spineer');
    });

  }

}
