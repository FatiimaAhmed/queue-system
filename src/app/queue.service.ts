import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueueService {
  ticketCount: number = 0;
  patients: { id: number, name: string, fullname: string, gender: string }[] = [];
  constructor() { }
}
