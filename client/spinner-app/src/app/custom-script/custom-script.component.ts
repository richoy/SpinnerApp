import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomScriptService } from '../services/custom-script.service';
import { ImageService } from '../services/image.service';
import { HeaderFooterService } from '../services/header-footer.service';
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
  SuccessfullyUpload: boolean = false;
  UnsuccessfullyUpload: boolean = false;

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
  HeaderAndFooterData: any;

  constructor( 
    private customScriptService: CustomScriptService,
    private imageService: ImageService,
    private headerandFooterService: HeaderFooterService,
    private fb: FormBuilder) {
      this.createForm();
     }

  ngOnInit(): void {
    this.getPreviousData();
  }
  
  getPreviousData() {
    this.headerandFooterService.getHeaderFooter()
      .subscribe(data => {
        this.HeaderAndFooterData = data;
        delete this.HeaderAndFooterData[0]['createdAt'];
        delete this.HeaderAndFooterData[0]['updatedAt'];
        delete this.HeaderAndFooterData[0]['_id'];
        delete this.HeaderAndFooterData[0]['__v'];

        this.setValuesofBackendHeaderAndFooter(this.HeaderFooterForm, this.HeaderAndFooterData[0]);

        if ( this.HeaderFooterForm.value.favicon != '' ) {
          this.onSuccess(this.HeaderAndFooterData[0].favicon);
        } else if (this.HeaderFooterForm.value.favicon == '') {
          this.SuccessfullyUpload = false;
          this.UnsuccessfullyUpload = false;
        }

        console.log(this.SuccessfullyUpload);
        console.log(this.UnsuccessfullyUpload);
      },(err) => {
        this.SuccessfullyUpload = false;
        this.UnsuccessfullyUpload = false;
        throw new Error(err);
      });
  }

  setValuesofBackendHeaderAndFooter(form, data) {
    form.patchValue(data);
  } 

  createForm() {
    this.HeaderFooterForm = this.fb.group({
      header: [''],
      footer: [''],
      pageTitle: [''],
      pageDescription: [''],
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
    }, err => {
      throw new Error('Error deleting the information of the previous spineer');
    });

  }

}
