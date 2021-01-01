import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebSocketService } from '../../services/web-socket.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  activeUsers;
  constructor(
    private readonly fb: FormBuilder,
    private readonly webSocketService: WebSocketService,
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.loginForm = this.fb.group({
      name: ['', Validators.required]
    })
  }

  onLoginClicked() {
    console.log('Name', this.loginForm.get('name').value+'')
    this.onJoin(this.loginForm.get('name').value+'');
  }

  onJoin(name) {

    this.webSocketService.onConnect(name);
    // this.webSocketService.listen('getUsers').subscribe((users) => {
    //   console.log('user', this.activeUsers)
    //   this.activeUsers = users;
    // });
    // this.webSocketService.listen('typing').subscribe((data) => this.updateFeedback(data));
    // this.webSocketService.listen('chat').subscribe((data) => this.updateMessage(data));

    // this.webSocketService.emit('getUsers', {});
  }
}
