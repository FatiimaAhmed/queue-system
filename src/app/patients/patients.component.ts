import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

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

}
