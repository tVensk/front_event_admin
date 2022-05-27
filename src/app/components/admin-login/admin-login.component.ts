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
  authenticationError: boolean = false;

  constructor(public loginService: LoginService,
              public router: Router) {
  }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.email, this.password).catch(() => {
      alert("Failed to sign in! Please check your credentials and try again.");
    }).finally(() => {
      if (this.loginService.isLoggedIn) {
        const redirectUrl = this.loginService.redirectUrl;

        this.router.navigate([redirectUrl]);
      }
    });
  }
}
