import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientFormComponent } from './patient-form/patient-form.component';
//import { PatientsComponent } from './patients.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  {
    path: '',
    component: PatientFormComponent,
    redirectTo: 'new-patient',
    pathMatch: 'full',
  },
  { path: 'new-patient', component: PatientFormComponent },
  { path: 'ticket', component: TicketComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }
