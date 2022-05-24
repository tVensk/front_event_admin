import { Component, OnInit } from '@angular/core';
import {Event} from "../../models/event";
import {EventsService} from "../../services/events-service/events.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-moderation-details',
  templateUrl: './moderation-details.component.html',
  styleUrls: ['./moderation-details.component.css']
})
export class ModerationDetailsComponent implements OnInit {

  event!:Event;

  constructor(
    private router:Router,
    public eventService:EventsService
  ) { }

  ngOnInit(): void {
    this.event = history.state;
    if (!this.event.id){
      this.router.navigate(['moderation']).then(() => console.log("Navigated to moderation page due to moderation abort"));
    }
  }

  approve(event: Event) {
    if (confirm("Are you sure you want to approve this event?")) {
      this.eventService.approveEvent(event.id);
    }
  }

  decline(event: Event) {
    if (confirm("Are you sure you want to decline this event?")) {
      this.eventService.declineEvent(event.id);
    }
  }
}
