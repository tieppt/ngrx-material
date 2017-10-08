import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'tpc-sidenav',
  template: `
  <mat-sidenav [opened]="open">
    <mat-nav-list>
      <ng-content></ng-content>
    </mat-nav-list>
  </mat-sidenav>
  `,
  styles: [
    `
    tpc-sidenav {
      display: block;
    }
    mat-sidenav {
      width: 300px;
    }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class SidenavComponent implements OnInit {

  @Input() open: boolean;

  constructor() { }

  ngOnInit() {
  }

}
