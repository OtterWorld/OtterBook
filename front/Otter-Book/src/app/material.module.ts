import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// UI Material API
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
// Small elements
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  imports: [
    CommonModule,
    MatSliderModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    // Small elments
    MatIconModule,
    MatRippleModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatListModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  exports: [
    MatSliderModule,
    MatToolbarModule,
    MatMenuModule,
    MatSelectModule,
    MatSidenavModule,
    MatCardModule,
    MatGridListModule,
    // Small elements
    MatIconModule,
    MatRippleModule,
    MatCheckboxModule,
    MatDividerModule,
    MatFormFieldModule,
    MatListModule,
    MatTooltipModule,
    MatButtonModule,
  ],
})
export class AppMaterialModule {}
