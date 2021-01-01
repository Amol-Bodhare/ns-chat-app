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

    const ws = new WebSocket('ws://localhost:8082');

    ws.addEventListener('open', ()=> {
      console.log('We are connected');
    })
  }

  listen(eventName: string): Observable<any> {
    return of(null);
  }

  emit(eventName: string, data: any) {
  }
}
