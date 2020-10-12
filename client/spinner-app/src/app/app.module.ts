import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { bootstrap } from 'bootstrap'

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomizeSpinnerComponent } from './customize-spinner/customize-spinner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EmailListComponent } from './email-list/email-list.component';
import { CustomScriptComponent } from './custom-script/custom-script.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomizeSpinnerComponent,
    EmailListComponent,
    CustomScriptComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
