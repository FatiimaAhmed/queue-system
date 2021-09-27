import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueueService {
  @Output() load = new EventEmitter<any>();
  ticketCount: number = 0;
  patients: { id: number, name: string, fullname: string, gender: string }[] = [];
  currentPatient: any;
  constructor() { }

  cancelTicket(id: number) {
    console.log(id)
    const updatedPatients = this.patients.filter(patient => { 
      console.log(patient.id, id)
      return patient.id !== id 
    });
    console.log(updatedPatients)
    this.patients = updatedPatients;
    this.ticketCount = this.ticketCount - 1;
  }

  getCurrentPatient() {
    if (this.ticketCount > 0) {
      this.currentPatient = this.patients[0];
    }

    return this.currentPatient;
  }

  getNextPatient() {
    this.patients = this.patients.filter(patient => { return patient.id !== this.currentPatient.id });
    this.getCurrentPatient();
    this.load.emit(this.currentPatient);
    return this.patients;
  }

  queuePatient() {
    this.patients.push(this.patients.splice(this.patients.indexOf(this.currentPatient), 1)[0]);
    this.getCurrentPatient();
    this.load.emit(this.currentPatient);
    return this.patients;
  }

}
