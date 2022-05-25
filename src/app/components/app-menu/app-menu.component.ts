import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login-service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})
export class AppMenuComponent implements OnInit {

  constructor(
    private loginService:LoginService,
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/']).then(()=>console.log("Admin logged out"));
  }
}
