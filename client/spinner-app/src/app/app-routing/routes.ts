import { Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { CustomizeSpinnerComponent } from '../customize-spinner/customize-spinner.component';
import { EmailListComponent } from '../email-list/email-list.component';
import { CustomScriptComponent } from '../custom-script/custom-script.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { PasswordChangeComponent } from '../password-change/password-change.component';
import { LoginGuard } from '../services/guards/login.guard';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'spinner', component: SpinnerComponent },
    { path: 'password-change', outlet:'backendControl', component: PasswordChangeComponent, canActivate: [LoginGuard] },
    { path: 'customize-spinner', outlet:'backendControl', component: CustomizeSpinnerComponent, canActivate: [LoginGuard] },
    { path: 'email-list', outlet:'backendControl', component: EmailListComponent, canActivate: [LoginGuard] },
    { path: 'custom-script', outlet:'backendControl', component: CustomScriptComponent, canActivate: [LoginGuard]},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', redirectTo: '/login', pathMatch:'full' }
];