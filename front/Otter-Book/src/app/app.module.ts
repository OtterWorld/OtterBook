import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

///Custom Modules
import { WebsitesDashboardModule } from './websites-dashboard-module/websites-dashboard.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/// Material UI
import { AppMaterialModule } from './material.module';
import { NbThemeModule, NbLayoutModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
     // Custome Modules
    WebsitesDashboardModule,
    BrowserAnimationsModule,
    // Material UI
    AppMaterialModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbEvaIconsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
