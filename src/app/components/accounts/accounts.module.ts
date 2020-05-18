import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { matModules } from '../../mat-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AccountsRoutingModule } from './accounts-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AccountsComponent } from './accounts.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component'

@NgModule({
  declarations: [LoginComponent, RegisterComponent, AccountsComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    matModules,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AccountsModule { }
