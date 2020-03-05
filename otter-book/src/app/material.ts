import { NgModule } from "@angular/core";

import { LayoutModule } from "@angular/cdk/layout";
import { ObserversModule } from "@angular/cdk/observers";
import {BidiModule} from '@angular/cdk/bidi';

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  imports: [
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
    ObserversModule,
    BidiModule,
    MatToolbarModule,
    MatButtonModule
  ],
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
    ObserversModule,
    BidiModule,
    MatToolbarModule,
    MatButtonModule
  ]
})
export class MaterialModule {}
