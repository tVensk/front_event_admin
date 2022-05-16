import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {SessionToken} from "../../models/session-token";

const BASE_URL: string = "http://172.20.13.76:8080/login";

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http: HttpClient) {
  }

  async login(email: String, password: String) {
    let data: any = await this.http.post(BASE_URL, {
      "username": email,
      "password": password
    }, {observe: "response"}).toPromise();
    SessionToken.sessionToken = data.body.token;
  }
}
