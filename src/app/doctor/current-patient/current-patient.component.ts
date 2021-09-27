import { Component, OnInit } from '@angular/core';
import { QueueService } from 'src/app/queue.service';

@Component({
  selector: 'app-current-patient',
  templateUrl: './current-patient.component.html',
})
export class CurrentPatientComponent implements OnInit {
  currentPatient: any;
  constructor(private queueService: QueueService) { }

  ngOnInit(): void {
    this.currentPatient = this.queueService.getCurrentPatient();
    this.queueService.load.subscribe(res => {
      this.currentPatient = res;
    })
  }

}
