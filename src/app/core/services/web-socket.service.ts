import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  constructor() { 
  }


  onConnect(name: string) {

    const mySocket = new WebSocket('ws://localhost:8082');

    mySocket.addEventListener('open', ()=> {
      console.log('We are connected');
      mySocket.send(JSON.stringify({
        name: name
      }));
    })

    mySocket.addEventListener('message', (evt)=> {
      console.log('Users received', new Map(JSON.parse(evt.data)));
    })
  }

  listen(eventName: string): Observable<any> {
    return of(null);
  }

  emit(eventName: string, data: any) {
  }
}
