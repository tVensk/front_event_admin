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

  getUsers() {
    return this.http.get(BASE_URL +"admin/users", {headers: {"Authorization": SessionToken.sessionToken}});
  }

}
