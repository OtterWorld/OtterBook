import { NgModule } from '@angular/core'

import { MatGridListModule } from "@angular/material/grid-list";
import { MatCardModule } from "@angular/material/card";


import { CatalogComponent } from './catalog/catalog.component';
import { WebsitesDashboardComponent } from "../websites-dashboard/websites-dashboard.component";

@NgModule({
 declarations:[
  CatalogComponent,
 ],
 imports: [
  MatGridListModule,
  MatCardModule,
  WebsitesDashboardComponent,
 ],
 exports: [

 ]
})

class WebsiteDashboardModule {}