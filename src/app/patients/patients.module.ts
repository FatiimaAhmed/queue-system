import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { TicketComponent } from './ticket/ticket.component';
import { GoBackAnchorComponent } from '../components/go-back-anchor/go-back-anchor.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { CardComponent } from '../components/card/card.component';

@NgModule({
  declarations: [PatientsComponent, TicketComponent, GoBackAnchorComponent, PatientFormComponent, CardComponent],
  imports: [
    CommonModule,
    PatientsRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PatientsModule { }
