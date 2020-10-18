import { Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { CustomizeSpinnerComponent } from '../customize-spinner/customize-spinner.component';
import { EmailListComponent } from '../email-list/email-list.component';
import { CustomScriptComponent } from '../custom-script/custom-script.component';
import { SpinnerComponent } from '../spinner/spinner.component'
import { LoginGuard } from '../services/guards/login.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'spinner', component: SpinnerComponent },
    { path: 'customize-spinner', component: CustomizeSpinnerComponent, canActivate: [LoginGuard] },
    { path: 'email-list', component: EmailListComponent, canActivate: [LoginGuard] },
    { path: 'custom-script', component: CustomScriptComponent, canActivate: [LoginGuard]},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login', pathMatch:'full' }
];