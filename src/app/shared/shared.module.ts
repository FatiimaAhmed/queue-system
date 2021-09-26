import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { GoBackAnchorComponent } from '../components/go-back-anchor/go-back-anchor.component';

@NgModule({
  declarations: [CardComponent, GoBackAnchorComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [CommonModule, RouterModule, CardComponent, GoBackAnchorComponent]
})
export class SharedModule { }
