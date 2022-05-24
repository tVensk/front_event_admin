import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SessionToken} from "../../models/session-token";

const BASE_URL: string = "http://172.20.13.76:8080/api/admin/statistics";

@Injectable({
  providedIn: 'root'
})
export class StatService {

  constructor(private http: HttpClient) {
  }

  getPriceStats() {
    return this.http.get(BASE_URL + "/price", {headers: {"Authorization": SessionToken.sessionToken}});
  }

  getStatusStats() {
    return this.http.get(BASE_URL + "/status", {headers: {"Authorization": SessionToken.sessionToken}});
  }

  getEntitiesData() {
    return this.http.get(BASE_URL + "/entities", {headers: {"Authorization": SessionToken.sessionToken}});
  }
}
