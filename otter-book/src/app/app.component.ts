import { Component, OnInit } from "@angular/core";
import { Store } from '@ngrx/store';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

import { GlobalState } from './store/models/global-state.model';
import { AppState } from './store/models/app-state.model'
import { ChangeColorScheme } from "./store/actions/global-state.action"

import { map, shareReplay } from 'rxjs/operators';

import { Sidenav } from "./models/layout.model"
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent implements OnInit {
  title = "otter-book";
  constructor(private breakpointObserver: BreakpointObserver, private store: Store<AppState>) { }

   ColorScheme: Observable<GlobalState>;
   newColorScheme: GlobalState = { colorSchema: '', id: ''}

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
        { category: 'category 1', link: "#1", colorSchema: "#54123b" },
        { category: 'category 2', link: "#2", colorSchema: "#84142d" },
        { category: 'category 3', link: "#3", colorSchema: "#c02739" },
        { category: 'category 4', link: "#4", colorSchema: "#0c7b93" }
      ]
    })
  )

  ngOnInit() {
      this.ColorScheme = this.store.select(store => store.globalColor);
      this.store.dispatch(new ChangeColorScheme(this.newColorScheme) );
  }

  changeScheme() {
     this.newColorScheme.id = '0';
     this.store.dispatch(new ChangeColorScheme(this.newColorScheme) );
     this.newColorScheme = { colorSchema: "", id: ""}
  }

}
