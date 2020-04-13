import { NgModule } from '@angular/core'
import { WebsitesDashboard } from './websites-dashboard.component'

/// Material UI
import { AppMaterialModule } from '../material.module'




@NgModule({
declarations: [
  WebsitesDashboard
],
imports:[
    // Material
    AppMaterialModule,
],
exports:[WebsitesDashboard],
bootstrap:[WebsitesDashboard]
})

export class WebsitesDashboardModule {}