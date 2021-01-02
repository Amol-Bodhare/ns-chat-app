import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.css']
})
export class UsersPageComponent implements OnInit {
  activeUsers = [];
  state;
  constructor(
    private readonly router: Router,
  ) {
    this.state = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    this.state.userList.forEach(user => {
      this.activeUsers.push(user.name);
    });
    console.log('users', this.activeUsers);
  }

}
