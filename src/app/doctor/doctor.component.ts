import { Component, OnInit } from '@angular/core';
import { QueueService } from '../queue.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  isEmpty: boolean = false;
  constructor(private queueService: QueueService) { }

  ngOnInit(): void {
  }

  onNextPatient() {
    this.queueService.nextPatient();
    // if (this.queueService.patients.length > 0) {
    //   this.isEmpty = false;
    // }
  }

  onQueuePatient() {

  }

}
