import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { ChatPageComponent } from './chat-page.component';



@NgModule({
  declarations: [
    ChatPageComponent
  ],
  imports: [ 
    NativeScriptCommonModule
  ]
})
export class ChatPageModule { }
