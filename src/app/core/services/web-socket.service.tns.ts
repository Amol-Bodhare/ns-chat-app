import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
require('nativescript-websockets');

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  activeUsers = new Subject();
  constructor() { 
  }


  onConnect(name: string) {
    console.log("Mobile only")
    const mySocket = new WebSocket('ws://localhost:8082');

    mySocket.addEventListener('open', (evt)=> {
      console.log('We are connected');
      mySocket.send(JSON.stringify({
        name: name
      }));
    })

    mySocket.addEventListener('message', (evt)=> {
      const response = JSON.parse(evt.data);

      if (response.userList) {
        console.log('Users received', JSON.stringify([...new Map(response.userList)]));
        this.activeUsers.next(new Map(response.userList))  
      }

    })
  }
}
