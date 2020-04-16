import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '/',
  },
  {
    path:'Websites',
    children: [
       {
         path: ':id'
       }
    ]
  },
  {
    path:'FlatDraw'
  },
  {
    path:'PathFinder'
  },
  {
    path:'SortAlgoritms'
  },
  {
    path: "WebsiteScrapper"
  },
  {
    path: 'ThreeJS'
  },
  {
    path: 'WebGL'
  },
  {
    path: 'C++'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
