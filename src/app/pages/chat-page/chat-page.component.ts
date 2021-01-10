import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {
  messages = [
    {
      message: "Hi, this is Amol",
      from: true
    },
    {
      message: "Hi, this is Amol",
      from: true
    },
    {
      message: "Hi, this is Amol",
      from: true
    },
    {
      message: "Hi, this is Amol",
      from: false
    },
    {
      message: "Hi, this is Amol",
      from: true
    },
    {
      message: "Hi, this is Amol",
      from: true
    },
    {
      message: "Hi, this is Amol",
      from: false
    },
    {
      message: "Hi, this is Amol",
      from: true
    },
    {
      message: "Hi, this is Amol and it is a big sentence",
      from: false
    },
    {
      message: "Hi, this is Amol22222, Hi, this is Amol22222, Hi, this is Amol22222, Hi, this is Amol22222",
      from: true
    },
  ]
  state;
  userIndex;
  userName;
  constructor(
    private readonly router: Router,
  ) {
    this.state = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    this.userName = this.state.userName;
    console.log('user index', this.state.id);
  }

}
