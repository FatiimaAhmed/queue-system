import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
  <div class="card border-0 shadow-sm">
    <div class="card-body">
    <div *ngIf="cardTitle"><h5>{{ cardTitle | titlecase }}</h5></div>
        <ng-content></ng-content>
    </div>
  </div>
  `,
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() cardTitle = "";
  constructor() { }

  ngOnInit(): void {
  }

}
