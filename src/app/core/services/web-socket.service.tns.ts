import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
require('nativescript-websockets');

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  activeUsers = new Subject();
  private mySocket: any;
  constructor() { 
  }


  onConnect(name: string) {
    console.log("Mobile only")
    this.mySocket = new WebSocket('ws://localhost:8082');

    this.mySocket.addEventListener('open', (evt)=> {
      console.log('We are connected');
      this.mySocket.send(JSON.stringify({
        name: name
      }));
    })

    this.mySocket.addEventListener('message', (evt)=> {
      const response = JSON.parse(evt.data);

      if (response.userList) {
        console.log('Users received', JSON.stringify([...new Map(response.userList)]));
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
