import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'ptt-nav-item',
  template: `
  <a mat-list-item [routerLink]="routerLink" (click)="navigate.emit()">
    <mat-icon mat-list-icon>{{ icon }}</mat-icon>
    <span mat-line>
      <ng-content></ng-content>
    </span>
    <span mat-line class="secondary">{{ hint }}</span>
  </a>
  `,
  styles: [
    `
    ptt-nav-item {
      display: block;
    }
    `
  ],
  encapsulation: ViewEncapsulation.None
})
export class NavItemComponent implements OnInit {
  @Input() icon = '';
  @Input() hint = '';
  @Input() routerLink: string | any[] = '/';
  @Output() navigate = new EventEmitter();
  constructor() {}

  ngOnInit() {}
}
