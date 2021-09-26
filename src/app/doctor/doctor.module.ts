import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DoctorRoutingModule } from './doctor-routing.module';
import { DoctorComponent } from './doctor.component';
import { WaitingListComponent } from './waiting-list/waiting-list.component';
import { CurrentPatientComponent } from './current-patient/current-patient.component';


@NgModule({
  declarations: [DoctorComponent, WaitingListComponent, CurrentPatientComponent],
  imports: [
    SharedModule,
    DoctorRoutingModule
  ]
})
export class DoctorModule { }
