import { Component, OnInit } from '@angular/core';
import { QueueService } from 'src/app/queue.service';

@Component({
  selector: 'app-waiting-list',
  templateUrl: './waiting-list.component.html',
  styleUrls: ['./waiting-list.component.css']
})
export class WaitingListComponent implements OnInit {
  waitingList: any[] = [];
  constructor(private queueService: QueueService) { }

  ngOnInit(): void {
    if (this.queueService.getCurrentPatient()) {
      const currentPatientId = this.queueService.getCurrentPatient().id;
      this.waitingList = this.queueService.patients.filter(patient => { return patient.id !== currentPatientId })
    }

    this.queueService.load.subscribe(res => {
      if (res) {
        const currentPatientId = res.id;
        this.waitingList = this.queueService.patients.filter(patient => { return patient.id !== currentPatientId })
      }
    })
  }

}
