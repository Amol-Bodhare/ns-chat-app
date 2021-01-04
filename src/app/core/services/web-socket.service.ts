import { Injectable } from '@angular/core';
import { of, Subject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  activeUsers = new Subject();
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
      const response = JSON.parse(evt.data);

      if (response.userList) {
        console.log('Users received', new Map(response.userList));
        this.activeUsers.next(new Map(response.userList))  
      }
    })
  }

  listen(eventName: string): Observable<any> {
    return of(null);
  }

  emit(eventName: string, data: any) {
  }
}
