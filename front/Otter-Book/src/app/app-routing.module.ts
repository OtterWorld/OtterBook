import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/// Pages
import { WelcomeComponent } from './welcome-page.component';
import { WebsitesDashboard } from './websites-dashboard-module/containers/websites-dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  {
    path: 'Websites',
    component: WebsitesDashboard,
    children: [
      {
        path: ':id',
      },
    ],
  },
  // {
  //   path:'FlatDraw'
  // },
  // {
  //   path:'PathFinder'
  // },
  // {
  //   path:'SortAlgoritms'
  // },
  // {
  //   path: "WebsiteScrapper"
  // },
  // {
  //   path: 'ThreeJS'
  // },
  // {
  //   path: 'WebGL'
  // },
  // {
  //   path: 'C++'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
