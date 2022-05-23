import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SessionToken} from "../../models/session-token";
import {Event} from "../../models/event";

const BASE_PAGE_URL: string = "http://172.20.13.76:8080/api/admin/event/confirmed";
const BASE_URL: string = "http://172.20.13.76:8080/api/event/all/active"

@Injectable({
  providedIn: 'root'
})
export class EventsService {


  constructor(private http: HttpClient) {
  }

  getEvents(page: number) {
    return this.http.get(BASE_PAGE_URL + "?page=" + page, {headers: {"Authorization": SessionToken.sessionToken}});
  }
  getAllEvents() {
    return this.http.get(BASE_URL, {headers: {"Authorization": SessionToken.sessionToken}});
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
}
