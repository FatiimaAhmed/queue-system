import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './patients.component';
import { TicketComponent } from './ticket/ticket.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PatientsComponent, TicketComponent, PatientFormComponent],
  imports: [
    SharedModule,
    PatientsRoutingModule,
    ReactiveFormsModule,
  ],
})
export class PatientsModule { }
