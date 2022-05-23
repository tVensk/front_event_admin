import { Component, OnInit } from '@angular/core';
import {User} from "../../models/user";
import {Event} from "../../models/event";
import {Router} from "@angular/router";
import {EventsService} from "../../services/events-service/events.service";

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  user!:User;

  constructor(
    private router:Router,
    private eventService:EventsService
  ) { }

  ngOnInit(): void {
    this.user = history.state;
    this.eventService.parseEventsStatus(this.user.creatorEvents);
    this.eventService.parseEventsLocation(this.user.creatorEvents);
  }

  parseDate(dateString: Date) {
    let date = new Date(dateString);
    return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
  }

  showEventDetails(event:Event) {
    this.router.navigate(['events/details'], {state: event}).then(() => console.log("Navigated to event details with event", event));
  }
}
