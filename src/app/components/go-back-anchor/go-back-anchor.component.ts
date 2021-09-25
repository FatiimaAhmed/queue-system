import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-go-back-anchor',
  template: `
  <div class="d-flex">
    <a class="tx-primary" [routerLink]="link" routerLinkActive="router-link-active"><span class="mr-2">&larr;</span> go back</a>
  </div>
  `
})
export class GoBackAnchorComponent implements OnInit {

  @Input() link: string;
  constructor() { }

  ngOnInit(): void {
  }

}
