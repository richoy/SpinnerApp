import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService, userLogin } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  LoginForm: FormGroup;
  LoginError: boolean;
  userLogedIn: any;

  constructor( 
    private fb: FormBuilder,
    private loginservice: LoginService,
    private router: Router) {
      this.createForm();
     }

  ngOnInit(): void {
    this.initialStatus();
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
      
      this.loginservice.Login(user).subscribe(userData => {
        this.userLogedIn = userData;
        this.LoginError = false;
        localStorage.setItem("userToken", this.userLogedIn.token);
        this.router.navigate(['admin/bc/customize-spinner']);
      }, err => {
        this.LoginError = true;
        
      })
    }
  }

  initialStatus(){
    this.loginservice.InitialUser()
      .subscribe(res => {
      });
  }
}
