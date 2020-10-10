import { Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { CustomizeSpinnerComponent } from '../customize-spinner/customize-spinner.component';
import { EmailListComponent } from '../email-list/email-list.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'custumize-spinner', component: CustomizeSpinnerComponent },
    { path: 'email-list', component: EmailListComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];