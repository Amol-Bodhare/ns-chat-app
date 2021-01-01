import { Injectable } from '@angular/core';
require('nativescript-websockets');

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

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
      console.log('Users received', JSON.stringify([...new Map(JSON.parse(evt.data))]));
    })
  }
}
