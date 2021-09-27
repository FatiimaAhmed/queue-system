import { Component, OnInit } from '@angular/core';
import { QueueService } from '../queue.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  isEmpty: boolean = false;
  btntext: string = "next patient";
  constructor(private queueService: QueueService) { }

  ngOnInit(): void {
    if (this.queueService.patients.length <= 0) {
      this.isEmpty = true;
      this.btntext = "your waiting list is empty 🙅🏻‍♂️"
    }
  }

  onNextPatient() {
    this.queueService.getNextPatient();
    if (this.queueService.patients.length <= 0) {
      this.isEmpty = true;
      this.btntext = "you're done for the day ✔️"
    }
  }

  onQueuePatient() {
    this.queueService.queuePatient();
  }

}
