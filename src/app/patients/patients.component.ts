import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QueueService } from '../queue.service';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  

  @ViewChild('componentInjector', { static: true, read: ViewContainerRef }) componentInjector: ViewContainerRef;
  components: any[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  // loadComponent() {
  //   const factory = this.componentFactoryResolver.resolveComponentFactory(TicketComponent);
  //   const ref = this.componentInjector.createComponent(factory);
  //   ref.changeDetectorRef.detectChanges();
  //   // Push the component so that we can keep track of which components are created
  //   this.components.push(ref);
  // }

}
