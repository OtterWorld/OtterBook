import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { WebsitesDashboardComponent } from './websites-dashboard/websites-dashboard.component';

export const routes: Routes = [
  {
    path: "",
    component: WebsitesDashboardComponent,
  },
  {
    path: "drawer",
    component: WebsitesDashboardComponent,
  },
  {
    path: "TreeJS",
    component: WebsitesDashboardComponent,
  },
  {
    path: "C++",
    component: WebsitesDashboardComponent,
  },
  {
    path: "admin",
    component: WebsitesDashboardComponent,
  },
  {
    path: "easter-egg",
    component: WebsitesDashboardComponent,
  },
  {
    path: "**",
    component: WebsitesDashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
