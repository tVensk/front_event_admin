import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login-service/login.service";

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {

  constructor(
    private loginService:LoginService
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.loginService.logout();
  }
}
