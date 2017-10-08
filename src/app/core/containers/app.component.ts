import { Component } from '@angular/core';

@Component({
  selector: 'tpc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  navState: boolean = false;
  closeSidenav() {
    this.navState = false;
  }

  openMenu() {
    this.navState = true;
  }

  toggleMenu() {
    this.navState = !this.navState;
  }
}
