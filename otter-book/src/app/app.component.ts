import { Component, Input } from "@angular/core";
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Tile } from "./models/grid.model"
import { Sidenav } from "./models/layout.model"
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent {
  title = "otter-book";


  constructor(private breakpointObserver: BreakpointObserver) {

  }
  gridNet: Tile[] = [
    {text: 'One', cols: 12, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 4, rows: 10, color: 'lightgreen'},
    {text: 'Three', cols: 8, rows: 10, color: 'lightpink'},
    {text: 'Four', cols: 12, rows: 1, color: '#DDBDF1'},
  ];

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

}
