import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QueueService } from 'src/app/queue.service';

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.css']
})
export class PatientFormComponent implements OnInit {
  patientInfoform: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', Validators.required),
    fullname: new FormControl('', Validators.required),
    gender: new FormControl('male', Validators.required),
  });
  constructor(private queueService: QueueService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  onGetticket() {
    let id = Math.floor(Math.random() * 100);

    this.queueService.patients.forEach(patient => {
      if (patient.id == id) {
        id = id + 1;
      }
    });

    if (this.patientInfoform.status == 'VALID') {
      console.log('valid')
      this.patientInfoform.patchValue({ id: id });
      this.queueService.patients.push(this.patientInfoform.value);

      this.queueService.ticketCount += 1;

      this.router.navigate(['../ticket'], { queryParams: { number: this.queueService.ticketCount, name: this.patientInfoform.get('fullname').value, id: this.patientInfoform.get('id').value}, relativeTo: this.route });
      this.patientInfoform.reset();
    } else {
      alert('please fill all form fields')
    }
  }

}
