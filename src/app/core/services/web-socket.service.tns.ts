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
    const ws = new WebSocket('ws://localhost:8082');

    ws.addEventListener('open', ()=> {
      console.log('We are connected');
    })
  }
}
