import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{ FooterComponent } from './footer/footer.component';
import{ HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { matModules } from '../../mat-module';
import { from } from 'rxjs';


@NgModule({
  declarations: [FooterComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    matModules
  ],
  exports:[FooterComponent, HeaderComponent, SidebarComponent]
})
export class SharedModule { }
