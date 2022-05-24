import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../services/events-service/events.service";
import {Event} from "../../models/event";
import {Router} from "@angular/router";
import {UsersService} from "../../services/users-service/users.service";


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
    private userService: UsersService,
    private eventsService: EventsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.getEvents(this.page);
  }

  setPage(i: number, event: any) {
    if (i < 0) {
      this.page = 0
      event.preventDefault();
      this.getEvents(this.page);
      return;
    }
    if (i >= this.pages.length) {
      this.page = this.pages.length - 1;
      event.preventDefault();
      this.getEvents(this.page);
      return;
    }
    this.page = i;
    event.preventDefault();
    this.getEvents(this.page);
  }

  getEvents(page: number) {
    this.eventsService.getEvents(page).subscribe((res: any) => {
      this.events = res.content;
      this.pages = new Array(res.totalPages);
      this.events.forEach((event) => {
        this.userService.getUserById(event.creator.id).subscribe((user: any) => {
          event.creator = user;
        })
      })
      this.eventsService.parseEventsStatus(this.events);
      this.eventsService.parseEventsLocation(this.events);
    });
  }

  parseDate(dateString: Date) {
    let date = new Date(dateString);
    return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
  }

  showEventDetails(event: Event) {
    this.router.navigate(['events/details'], {state: event}).then(() => console.log("Navigated to event details with event", event));
  }

  getStatusStyle(status: string):string {
    if (status == "SCHEDULED") return "scheduled";
    if (status == "IN PROGRESS") return "in-progress";
    if (status == "ENDED") return "ended";
    return "";
  }
}
