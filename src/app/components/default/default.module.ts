import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DefaultComponent } from './default.component';
import { SharedModule } from '../shared/shared.module';
import { matModules } from '../../mat-module'; 

@NgModule({
  declarations: [DashboardComponent, DefaultComponent],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    SharedModule,
    matModules
  ]
})
export class DefaultModule { }
