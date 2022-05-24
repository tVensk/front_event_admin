import {Component, OnInit} from '@angular/core';
import {LoginService} from "../../services/login-service/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  email: string = "";
  password: string = "";
  isAuthenticated: boolean = false;
  authenticationError: boolean = false;

  constructor(public loginService: LoginService,
              public router:Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.email, this.password).catch(() => {
      this.authenticationError = true;
      setTimeout(() => {
        this.authenticationError = false;
        this.isAuthenticated = false;
      }, 1500)
    }).finally(() => {
      if (this.loginService.isLoggedIn) {
        const redirectUrl = this.loginService.redirectUrl;

        this.router.navigate([redirectUrl]);
      }
    });
  }
}
