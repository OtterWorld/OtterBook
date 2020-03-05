import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WebsitesDashboardComponent } from './websites-dashboard/websites-dashboard.component';

const routes: Routes = [
  {
    path: "",
    component: WebsitesDashboardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
