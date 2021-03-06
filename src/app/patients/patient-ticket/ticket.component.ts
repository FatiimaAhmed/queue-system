import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QueueService } from 'src/app/queue.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styles: ['p { margin: 0; font-weight: 500}']
})
export class TicketComponent implements OnInit {
  ticketData: any;
  isCanceld: boolean = false;
  print: boolean = false;
  constructor(private route: ActivatedRoute, private router: Router, private queueService: QueueService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(res => {
      this.ticketData = res;
    })
  }

  onCancelTicket(id: number) {
    this.queueService.cancelTicket(Number(id));
    this.isCanceld = true;
    setTimeout(() => {
      this.isCanceld = false;
      this.router.navigateByUrl('/patients/new-patient');
    }, 1500);
  }

  onPrintTicket() {
    this.print = true;
    setTimeout(() => {
      this.router.navigateByUrl('/patients/new-patient');
    }, 1000);
  }

}
