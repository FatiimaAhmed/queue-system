import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-patients',
  template: `<router-outlet></router-outlet>`,
})
export class PatientsComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
