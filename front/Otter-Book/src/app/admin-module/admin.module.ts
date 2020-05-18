import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component'

@NgModule({
  declarations: [AdminComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AdminComponent]
})

export class AdminModule {
  
}