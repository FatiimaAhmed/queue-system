import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InjectorDirective } from '../injector.directive';
import { QueueService } from '../queue.service';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patientInfoform: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', Validators.required),
    fullname: new FormControl('', Validators.required),
    gender: new FormControl('male', Validators.required),
  });
  @ViewChild(InjectorDirective, { static: true }) componentInjector!: InjectorDirective;

  constructor(private queueService: QueueService, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  loadComponent() {

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(TicketComponent);

    const viewContainerRef = this.componentInjector.viewContainerRef;
    viewContainerRef.clear();

    viewContainerRef.createComponent<TicketComponent>(componentFactory);
    //componentRef.instance.data = componentInjector.data;
  }

  onGetticket() {
    let id = Math.floor(Math.random() * 100);

    this.queueService.patients.forEach(patient => {
      if (patient.id == id) {
        id = id + 1;
      }
    });

    if (this.patientInfoform.status == 'VALID') {
      this.patientInfoform.patchValue({ id: id });
      this.queueService.patients.push(this.patientInfoform.value);
      this.patientInfoform.reset();
      this.queueService.ticketCount += 1;

      console.log(this.queueService.patients, this.queueService.ticketCount);
      this.loadComponent();
    } else {
      alert('please fill all form fields')
    }
  }

}
