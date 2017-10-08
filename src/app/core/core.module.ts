import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAppModule } from '@app/material-app/material-app.module';
import { AppComponent } from './containers/app.component';
import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './components/layout.component';
import { SidenavComponent } from './components/sidenav.component';
import { NavItemComponent } from './components/nav-item.component';
import { HomeComponent } from './containers/home.component';
import { NotFoundComponent } from './containers/not-found.component';

export const components = [
  AppComponent,
  LayoutComponent,
  SidenavComponent,
  NavItemComponent,
  HomeComponent,
  NotFoundComponent
];

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialAppModule,
    CoreRoutingModule
  ],
  declarations: [
    ...components
  ],
  exports: [
    ...components
  ]
})
export class CoreModule { }
