import { Component, OnInit, Directive } from "@angular/core";
import { Store } from '@ngrx/store';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';

import { GlobalState } from './store/models/global-state.model';
import { AppState } from './store/models/app-state.model'
import { ChangeColorScheme } from "./store/actions/global-state.action"
import { GlobalReducer } from "./store/reducers/global-state.reducer"

import { map, shareReplay } from 'rxjs/operators';

import { Sidenav } from "./models/layout.model"
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})

export class AppComponent implements OnInit {
  title = "otter-book";
  
  newStateColor: string;
  constructor(private breakpointObserver: BreakpointObserver, private store: Store<{globalColor: {colorSchema: GlobalState }}>) { }

   ColorScheme: Observable<GlobalState>;
   newColorScheme: GlobalState = { colorSchema: '', id: ''}
   initialState: GlobalState = {
    colorSchema: ''
  };
  options: Sidenav = {
    fixed: true,
    bottom: 0,
    top: 64,
  }
Routing: Array<{}> = [
  {
    path: ""
  },
  {
    path: "drawer"
  },
  {
    path: "TreeJS"
  },
  {
    path: "C++"
  },
  {
    path: "admin"
  },
  {
    path: "easter-egg"
  }
]


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
        { category: 'category 1', link: "", colorSchema: "#54123b" },
        { category: 'category 2', link: "drawer", colorSchema: "#84142d" },
        { category: 'category 3', link: "TreeJS", colorSchema: "#c02739" },
        { category: 'category 4', link: "C", colorSchema: "#0c7b93" }
      ]
    })
  )

  ngOnInit() {
      // this.ColorScheme = this.store.select(store => store.globalColor);
      this.store.dispatch(new ChangeColorScheme(this.newColorScheme) );
      
  }

  changeScheme(newColorSchema: string) {
    this.initialState.colorSchema = newColorSchema;
    this.store.dispatch(new ChangeColorScheme(this.newColorScheme) );
  }

}
