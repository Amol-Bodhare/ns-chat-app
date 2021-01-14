import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  activeUsers = new Subject();
  private mySocket: any;
  constructor() { 
  }

  onConnect(name: string) {

    this.mySocket = new WebSocket('ws://localhost:8082');

    this.mySocket.addEventListener('open', ()=> {
      console.log('We are connected');
      this.mySocket.send(JSON.stringify({
        name: name
      }));
    })

    this.mySocket.addEventListener('message', (evt)=> {
      const response = JSON.parse(evt.data);

      if (response.userList) {
        console.log('Users received', new Map(response.userList));
        this.activeUsers.next(new Map(response.userList))  
      }
    })
  }

  onSendMessage(message: string, toId: string) {
    this.mySocket.send(JSON.stringify({
      message: message,
      to: toId
    }))
  }
}
