import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

import { map, shareReplay } from 'rxjs/operators';

import { Sidenav } from "./models/layout.model"
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent {
  title = "otter-book";
  constructor(private breakpointObserver: BreakpointObserver) { }

  options: Sidenav = {
    fixed: true,
    bottom: 0,
    top: 64,
  }



  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


    /// Mock View for navigation
  lists = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({matches}) => {
      if(matches) {
        return []
      }
      return [
        { category: 'category 1', link: "#1", colorSchema: "red" },
        { category: 'category 2', link: "#2", colorSchema: "red" },
        { category: 'category 3', link: "#3", colorSchema: "red" },
        { category: 'category 4', link: "#4", colorSchema: "red" }
      ]
    })
  )

}
