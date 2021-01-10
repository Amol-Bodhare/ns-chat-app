import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
