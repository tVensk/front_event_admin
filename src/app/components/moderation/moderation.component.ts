import { Component, OnInit } from '@angular/core';
import {Event} from "../../models/event";
import {UsersService} from "../../services/users-service/users.service";
import {EventsService} from "../../services/events-service/events.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-moderation',
  templateUrl: './moderation.component.html',
  styleUrls: ['./moderation.component.css']
})
export class ModerationComponent implements OnInit {

  showNotAccepted:boolean = true;
  private page: number = 0;
  events: Event[] = [];
  pages: number[] = [];

  constructor(
    private userService: UsersService,
    public eventsService: EventsService,
    private router: Router
  ) { }

  setPage(i: number, event: any) {
    if (i < 0) {
      this.page = 0
      event.preventDefault();
      this.getEvents();
      return;
    }
    if (i >= this.pages.length) {
      this.page = this.pages.length - 1;
      event.preventDefault();
      this.getEvents();
      return;
    }
    this.page = i;
    event.preventDefault();
    this.getEvents();
  }

  ngOnInit(): void {
    this.showEdit()
  }

  getEvents() {
    if (!this.showNotAccepted){
      this.showEdit();
      this.showNotAccepted = false;
    }else {
      this.showNew();
      this.showNotAccepted = false;
    }
  }

  goToModeration(event: Event) {
    this.router.navigate(['moderation/event'], {state: event}).then(() => console.log("Navigated to event moderation with event", event));
  }

  showNew() {
    this.showNotAccepted = !this.showNotAccepted;
    this.eventsService.getRejectedEvents(this.page).subscribe((res:any)=>{
      this.events = res.content;
      this.pages = new Array(res.totalPages);
      this.events.forEach((event) => {
        this.userService.getUserById(event.creator.id).subscribe((user: any) => {
          event.creator = user;
        })
      })
      this.parseModeratedEventsStatus(this.events);
      this.eventsService.parseEventsLocation(this.events);
    })
  }

  showEdit() {
    this.showNotAccepted = !this.showNotAccepted;
    this.eventsService.getNotAcceptedEvents(this.page).subscribe((res:any)=>{
      this.events = res.content;
      this.pages = new Array(res.totalPages);
      this.events.forEach((event) => {
        this.userService.getUserById(event.creator.id).subscribe((user: any) => {
          event.creator = user;
        })
      })
      this.parseModeratedEventsStatus(this.events);
      this.eventsService.parseEventsLocation(this.events);
    })
  }

  parseModeratedEventsStatus(events:Event[]){
    events.forEach((event)=>{
      if (event.confirmation == null) event.status = "NEW";
      if (event.confirmation == false) event.status = "EDITING";
    })
  }

  getStatusStyle(status: string):string {
    if (status == "NEW") return "new";
    if (status == "EDITING") return "editing";
    return "";
  }
}
