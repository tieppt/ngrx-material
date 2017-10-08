import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as fromRoot from '@app/store/reducers';
import * as layout from '@app/core/store/actions/layout';

@Component({
  selector: 'tpc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navState$: Observable<boolean>;

  constructor(private store: Store<fromRoot.State>) {
    this.navState$ = store.select(fromRoot.getShowSidenav);
  }

  closeSidenav() {
    this.store.dispatch(new layout.CloseSidenav());
  }

  openMenu() {
    this.store.dispatch(new layout.OpenSidenav());
  }

  toggleMenu() {
    this.store.dispatch(new layout.ToggleSidenav());
  }
}
