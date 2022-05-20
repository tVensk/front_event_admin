import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../services/events-service/events.service";
import {Event} from "../../models/event";


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  private page: number = 0;
  events: Event[] = [];
  pages: number[] = [];

  constructor(
    private eventsService: EventsService
  ) {
  }

  ngOnInit(): void {
    this.getEvents();
  }

  setPage(i: number, event: any) {
    event.preventDefault();
    this.page = i;
    this.getEvents();
  }

  getEvents() {
    this.eventsService.getEvents().subscribe((events: any) => {
      this.events = events;
      this.eventsService.parseEventsLocation(this.events);
    });
  }

  parseDate(dateString: Date) {
    let date = new Date(dateString);
    return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
  }

}
