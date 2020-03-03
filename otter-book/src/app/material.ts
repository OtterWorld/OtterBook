import { LayoutModule } from "@angular/cdk/layout";
import { ObserversModule } from "@angular/cdk/observers";
import {BidiModule} from '@angular/cdk/bidi';

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatDividerModule } from "@angular/material/divider";
import { MatGridListModule } from "@angular/material/grid-list";
import { NgModule } from "@angular/core";

@NgModule({
  imports: [
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
    ObserversModule,
    BidiModule
  ],
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatDividerModule,
    MatGridListModule,
    ObserversModule,
    BidiModule
  ]
})
export class MaterialModule {}
