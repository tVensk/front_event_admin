import {Component, OnInit} from '@angular/core';
import {Event} from "../../models/event";
import {EventsService} from "../../services/events-service/events.service";
import {User} from "../../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event!: Event;

  constructor(
    private eventService: EventsService,
    private router:Router
  ) {
  }

  ngOnInit(): void {
    this.event = history.state;

  }

  deleteEvent(event: Event) {
    if (confirm("Are you sure to delete " + event.name)) {
      this.eventService.deleteEvent(event);
    }
  }

  parseDate(dateString: Date) {
    let date = new Date(dateString);
    return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
  }

  showCreatorInfo(creator: User) {
    this.router.navigate(['users/details'], {state: creator}).then(() => console.log("Navigated to user details with user", creator));
  }
}
