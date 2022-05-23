import {Component, OnInit} from '@angular/core';
import {UsersService} from "../../services/users-service/users.service";
import {User} from "../../models/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  private page: number = 0;
  users: User[] = [];
  pages: number[] = [];

  constructor(
    private userService: UsersService,
    private router:Router
  ) {
  }

  ngOnInit(): void {
    this.getUsers();
  }


  setPage(i: number, event: any) {
    event.preventDefault();
    this.page = i;
    this.getUsers();
  }

  private getUsers() {
    this.userService.getUsers().subscribe((users: any) => {
      this.users = users
    })
  }

  showUserDetails(user: User) {
    this.router.navigate(['users/details'], {state: user}).then(() => console.log("Navigated to user details with user", user));
  }
}
