import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../components/card/card.component';
import { GoBackAnchorComponent } from '../components/go-back-anchor/go-back-anchor.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'

@NgModule({
  declarations: [CardComponent, GoBackAnchorComponent],
  imports: [
    CommonModule,
    RouterModule,
    SweetAlert2Module
  ],
  exports: [CommonModule, RouterModule, CardComponent, GoBackAnchorComponent, SweetAlert2Module]
})
export class SharedModule { }
