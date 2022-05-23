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
    this.getUsers(this.page);
  }


  setPage(i: number, event: any) {
    if (i < 0) {
      this.page = 0
      event.preventDefault();
      this.getUsers(this.page);
      return;
    }
    if (i >= this.pages.length) {
      this.page = this.pages.length - 1;
      event.preventDefault();
      this.getUsers(this.page);
      return;
    }
    this.page = i;
    event.preventDefault();
    this.getUsers(this.page);
  }

  private getUsers(page:number) {
    this.userService.getUsers(page).subscribe((res: any) => {
      this.users = res.content;
      this.pages = new Array(res.totalPages);
    })
  }

  showUserDetails(user: User) {
    this.router.navigate(['users/details'], {state: user}).then(() => console.log("Navigated to user details with user", user));
  }
}
