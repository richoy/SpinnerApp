import { Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { CustomizeSpinnerComponent } from '../customize-spinner/customize-spinner.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'custumize-spinner', component: CustomizeSpinnerComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];