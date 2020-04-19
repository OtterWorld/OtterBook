import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common'
//Containers
import { WebsitesDashboard } from './containers/websites-dashboard.component'
//Components
import { ExampleCard } from './components/example-cart.component'


/// Material UI
import { AppMaterialModule } from '../material.module'


/// Services
import { WebsitesDashboardServices } from './websites-dashboard.services'





@NgModule({
declarations: [
  WebsitesDashboard,
  ExampleCard
],
imports:[
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    // Material
    AppMaterialModule,
    // Service related modules
    HttpClientModule
],
providers: [
  WebsitesDashboardServices
],
exports:[WebsitesDashboard],
bootstrap:[WebsitesDashboard]
})

export class WebsitesDashboardModule {}