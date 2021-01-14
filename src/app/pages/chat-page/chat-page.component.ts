import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebSocketService } from '@src/app/core/services/web-socket.service';

@Component({
  selector: 'app-chat-page',
  templateUrl: './chat-page.component.html',
  styleUrls: ['./chat-page.component.css']
})
export class ChatPageComponent implements OnInit {
  messages = []
  state;
  userIndex;
  userName;
  messageForm: FormGroup;
  constructor(
    private readonly fb: FormBuilder,
    private readonly webSocketService: WebSocketService,
    private readonly router: Router,
  ) {
    this.state = this.router.getCurrentNavigation().extras.state;
  }

  ngOnInit(): void {
    this.createForm();
    this.userName = this.state.userName;
    console.log('user index', this.state.id);
  }

  createForm() {
    this.messageForm = this.fb.group({
      message: ['', Validators.required]
    })
  }

  onSend() {
    console.log('Form', this.messageForm.get('message').value+'')
    this.messages.push({
      message: this.messageForm.get('message').value,
      from: 'right'
    });
    this.webSocketService.onSendMessage(this.messageForm.get('message').value+'', this.state.id);
  }

}
