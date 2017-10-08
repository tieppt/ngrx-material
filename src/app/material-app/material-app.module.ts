import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatLineModule,
  MatButtonModule
} from '@angular/material';

const modules = [
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatIconModule,
  MatLineModule,
  MatButtonModule
];

@NgModule({
  imports: [
    CommonModule,
    ...modules
  ],
  exports: [
    ...modules
  ],
  declarations: []
})
export class MaterialAppModule { }
