import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SessionToken} from "../../models/session-token";
import {Event} from "../../models/event";

const BASE_URL: string = "http://172.20.13.76:8080/api/admin/event"

@Injectable({
  providedIn: 'root'
})
export class EventsService {


  constructor(private http: HttpClient) {
  }

  getEvents(page: number) {
    return this.http.get(BASE_URL + "/confirmed?page=" + page, {headers: {"Authorization": SessionToken.sessionToken}});
  }

  getAllEvents() {
    return this.http.get(BASE_URL + "/all", {headers: {"Authorization": SessionToken.sessionToken}});
  }

  getNotAcceptedEvents(page: number) {
    return this.http.get(BASE_URL + "/unconfirmed?page=" + page, {headers: {"Authorization": SessionToken.sessionToken}});
  }

  getRejectedEvents(page: number) {
    return this.http.get(BASE_URL + "/nullconfirmed?page=" + page, {headers: {"Authorization": SessionToken.sessionToken}});
  }

  approveEvent(id: number) {
    return this.http.post("http://172.20.13.76:8080/api/admin/approve", {"id": id}, {headers: {"Authorization": SessionToken.sessionToken}});
  }

  declineEvent(id: number) {
    return this.http.post("http://172.20.13.76:8080/api/admin/decline", {"id": id}, {headers: {"Authorization": SessionToken.sessionToken}});
  }

  parseEventsLocation(events: Event[]) {
    events.forEach((event) => {
      if (event.latitude & event.longitude) {
        this.http.get("https://revgeocode.search.hereapi.com/v1/revgeocode?at=" + event.latitude + "%2C" + event.longitude + "&lang=en-US" +
          "&apikey=67we8JC7SKfjYQtMK1RQYU0e7afSXwC6jAHdYhqcpcw", {observe: "response"}).subscribe((res: any) => {
          event.address = res.body['items'][0]['address']['label'];
        })
      }
    })
  }

  parseEventsStatus(events: Event[]) {
    events.forEach((event) => {
      let now = new Date();
      let start = new Date(event.startDate);
      let end = new Date(event.endDate);
      if (now < start) {
        event.status = "SCHEDULED"
      }
      if (now > start && now < end) {
        event.status = "IN PROGRESS"
      }
      if (now > end) {
        event.status = "ENDED"
      }
    })
  }

  deleteEvent(event: Event) {
    //TODO:delete implementation
  }

  parseDate(dateString: Date) {
    let date = new Date(dateString);
    return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
  }
}
