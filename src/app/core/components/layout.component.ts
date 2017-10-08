import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tpc-layout',
  template: `
  <mat-sidenav-container fullscreen>
    <ng-content></ng-content>
  </mat-sidenav-container>
  `,
  styles: [
    `
    :host {
      display: block;
    }
    `
  ]
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
