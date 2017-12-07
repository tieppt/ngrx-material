import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from '@env/environment';
import { AppComponent, CoreModule } from '@app/core';
import { reducers, metaReducers } from '@app/store/reducers';
import { AppRoutingModule } from './app-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { PttRouterStateSerializer } from '@app/shared';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    CoreModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    StoreRouterConnectingModule,
    environment.production ? [] : StoreDevtoolsModule.instrument(),
    EffectsModule.forRoot([]),
    AppRoutingModule
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: PttRouterStateSerializer }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
