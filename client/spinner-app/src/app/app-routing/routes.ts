import { Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { CustomizeSpinnerComponent } from '../customize-spinner/customize-spinner.component';
import { EmailListComponent } from '../email-list/email-list.component';
import { CustomScriptComponent } from '../custom-script/custom-script.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'customize-spinner', component: CustomizeSpinnerComponent },
    { path: 'email-list', component: EmailListComponent },
    { path: 'custom-script', component: CustomScriptComponent},
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];