import { Component } from '@angular/core';

// UI Material
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';  // provide logic for responsive behavior
import { Observable } from 'rxjs';  // stream of events to upfate changes iw window width
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private breakpointObserver: BreakpointObserver) {}

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );
  vertical: Boolean = true /// mat-divider option 
  inset: Boolean = true /// mat-divider option
  events: string[] = [];
  title = 'Otter-Book';
  myColor: '#fff';

  /// Lang i18n mockup

  /// Modules list

   lists = [
    { category: 'Websites Dashboard', link: "Websites", colorSchema: "#54123b" },
    { category: 'FlatDraw', link: "", colorSchema: "#84142d" },
    { category: 'PathFinder', link: "", colorSchema: "#c02739" },
    { category: 'SortAlgoritms', link: "", colorSchema: "#0c7b93" },
    { category: 'ThreeJS', link: "", colorSchema: "#c02739" },
    { category: 'WebGL', link: "", colorSchema: "#54123b" },
    { category: 'C++', link: "", colorSchema: "#0c7b93" }
  ]
}
