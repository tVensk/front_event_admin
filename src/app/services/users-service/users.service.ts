import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SessionToken} from "../../models/session-token";

const BASE_URL: string = "http://172.20.13.76:8080/api/";

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private http: HttpClient) {
  }

  getUsers(page:number) {
    return this.http.get(BASE_URL + "admin/users?page=" + page, {headers: {"Authorization": SessionToken.sessionToken}});
  }

  getUserById(id: number) {
    return this.http.get(BASE_URL + "admin/user/" + id, {headers: {"Authorization": SessionToken.sessionToken}});
  }

}
