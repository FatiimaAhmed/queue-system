import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueueService {
  @Output() load = new EventEmitter<any>();
  ticketCount: number = 0;
  patients: { id: number, name: string, fullname: string, gender: string }[] = [];
  updatedPatients: any;
  currentPatient: any;
  constructor() { }

  cancelTicket(id: number) {
    this.updatedPatients = this.patients.filter(patient => {return patient.id == id});
    this.patients = this.updatedPatients;
    this.ticketCount = this.ticketCount - 1;
  }

  getCurrentPatient() {
    if(this.ticketCount > 0) {
      this.currentPatient = this.patients[0];
    }
    
    return this.currentPatient;
  }

  nextPatient() {
    this.patients = this.patients.filter(patient => { return patient.id !== this.currentPatient.id });
    this.getCurrentPatient();
    this.load.emit(this.currentPatient);
    return this.patients;
  }
}
