import {Component, OnInit} from '@angular/core';
import {Event} from "../../models/event";
import {EventsService} from "../../services/events-service/events.service";
import {User} from "../../models/user";
import {Router} from "@angular/router";
import {UsersService} from "../../services/users-service/users.service";

@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

  event!: Event;

  constructor(
    private userService: UsersService,
    public eventService: EventsService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.event = history.state;
    if (this.event.creator) {
      this.userService.getUserById(this.event.creator.id).subscribe((user: any) => {
        this.event.creator = user;
        this.event.users.forEach((user) => {
          this.userService.getUserById(user.id).subscribe((userById: any) => {
            let userIndex = this.event.users.findIndex(user => user.id == userById.id);
            this.event.users[userIndex] = userById;
          })
        })
      })
    } else {
      this.router.navigate(['events']).then(() => console.log("Navigated to events page due to event edit abort"));
    }

  }

  deleteEvent(event: Event) {
    if (confirm("Are you sure to delete " + event.name)) {
      this.eventService.deleteEvent(event).subscribe(() => this.router.navigate(['events']).then(() => console.log("Navigated to events")));
    }
  }

  showUserDetails(user: User) {
    this.router.navigate(['users/details'], {state: user}).then(() => console.log("Navigated to user details with user", user));
  }
}
