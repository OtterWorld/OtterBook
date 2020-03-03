import { Component } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";
import { Tile } from "./grid.model"
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})


export class AppComponent {
  title = "otter-book";

  gridNet: Tile[] = [
    {text: 'One', cols: 12, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 4, rows: 10, color: 'lightgreen'},
    {text: 'Three', cols: 8, rows: 10, color: 'lightpink'},
    {text: 'Four', cols: 12, rows: 1, color: '#DDBDF1'},
  ];
}
