import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { TicketComponent } from './ticket/ticket.component';


@NgModule({
  declarations: [PatientsComponent, TicketComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PatientsModule { }
