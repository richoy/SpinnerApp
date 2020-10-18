import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService, userLogin } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  LoginError: boolean;

  constructor( 
    private fb: FormBuilder,
    private loginservice: LoginService) {
      this.createForm();
     }

  ngOnInit(): void {
    this.LoginError = false;
  }

  createForm() {
    this.LoginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(){
    if(this.LoginForm.status === "VALID"){
      const user = new userLogin(this.LoginForm.controls.username.value, 
                                this.LoginForm.controls.password.value)
      
      this.loginservice.Login(user).subscribe((resp: any) => {
         if(resp.success === true) {
           this.LoginError = false;
           localStorage.setItem("userToken", resp.token);
         }
      }, err => {
        this.LoginError = true;
        
      })
    }
  }
}
