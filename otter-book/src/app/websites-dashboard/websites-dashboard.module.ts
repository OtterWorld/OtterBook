import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebsiteComponent } from './website/website.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [WebsiteComponent, DashboardComponent],
  imports: [
    CommonModule
  ]
})
export class WebsitesDashboardModule { }
