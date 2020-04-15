import { NgModule } from '@angular/core'


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
    // Material
    AppMaterialModule,
],
providers: [
  WebsitesDashboardServices
],
exports:[WebsitesDashboard],
bootstrap:[WebsitesDashboard]
})

export class WebsitesDashboardModule {}