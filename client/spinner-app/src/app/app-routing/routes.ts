import { Routes } from '@angular/router';

import { LoginComponent } from '../login/login.component';
import { CustomizeSpinnerComponent } from '../customize-spinner/customize-spinner.component';
import { EmailListComponent } from '../email-list/email-list.component';
import { CustomScriptComponent } from '../custom-script/custom-script.component';
import { SpinnerComponent } from '../spinner/spinner.component';
import { BackendControlComponent } from '../backend-control/backend-control.component';
import { PasswordChangeComponent } from '../password-change/password-change.component';
import { AdminComponent } from '../admin/admin.component';
import { LoginGuard } from '../services/guards/login.guard';

export const routes: Routes = [
    { path: 'spinner', component: SpinnerComponent },
    { path: 'admin', component: AdminComponent,
        children: [
            { path: '', component: LoginComponent },
            { path: 'bc', component: BackendControlComponent, canActivate: [LoginGuard],
            children: [
                { path: 'password-change', component: PasswordChangeComponent, canActivate: [LoginGuard] },
                { path: 'customize-spinner', component: CustomizeSpinnerComponent, canActivate: [LoginGuard] },
                { path: 'email-list', component: EmailListComponent, canActivate: [LoginGuard] },
                { path: 'custom-script', component: CustomScriptComponent, canActivate: [LoginGuard]},
            ] },
        ] },
    { path: '', redirectTo: '/spinner', pathMatch: 'full' },
    { path: '**', redirectTo: '/spinner', pathMatch:'full' },
    { path: 'admin', redirectTo: 'admin/', pathMatch:'full' }
];