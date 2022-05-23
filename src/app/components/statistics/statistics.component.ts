import {Component, OnInit} from '@angular/core';
import {EventsService} from "../../services/events-service/events.service";
import {User} from "../../models/user";
import {Event} from "../../models/event";
import {UsersService} from "../../services/users-service/users.service";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  events!: Event[];
  users!: User[];
  eventsPriceData: any;
  eventsStatusData: any;
  entityData: any;


  constructor(
    private eventService: EventsService,
    private userService: UsersService
  ) {
  }


  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe((events: any) => {

      this.events = events;
      this.eventService.parseEventsStatus(this.events);

      this.eventsPriceData = [
        {name: "Free", value: this.countFreeEvents(events)},
        {name: "Paid", value: this.countPaidEvents(events)},
      ];

      this.eventsStatusData = [
        {name: "Scheduled", value: this.countEventStatus(events, "SCHEDULED")},
        {name: "In process", value: this.countEventStatus(events, "IN PROGRESS")},
        {name: "Ended", value: this.countEventStatus(events, "ENDED")}
      ]

      this.userService.getUsers(0).subscribe((res: any) => {
        this.users = res.content;
        this.entityData = [
          {name: "Users", value: res.content.length},
          {name: "Events", value: events.length}
        ]
      })
    })
  }


  countFreeEvents(events: Event[]) {
    let result: number = 0;
    events.forEach((event) => {
      if (event.price == 0) result += 1;
    })
    return result;
  }

  countPaidEvents(events: Event[]) {
    let result: number = 0;
    events.forEach((event) => {
      if (event.price > 0) result += 1;
    })
    return result;
  }

  countEventStatus(events: Event[], status: string) {
    let result: number = 0;
    events.forEach((event) => {
      if (event.status == status) result += 1
    })
    return result;
  }

}
