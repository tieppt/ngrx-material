import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAppModule } from '@app/material-app/material-app.module';
import { AppComponent } from './containers/app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout.component';
import { SidenavComponent } from './components/sidenav.component';
import { NavItemComponent } from './components/nav-item.component';

export const components = [
  AppComponent,
  LayoutComponent,
  SidenavComponent,
  NavItemComponent
];

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialAppModule,
    AppRoutingModule
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
    AppRoutingModule
  ]
})
export class CoreModule { }
