import { NgModule } from '@angular/core';
import { NativeScriptCommonModule, NativeScriptModule } from '@nativescript/angular';
import { ChatPageComponent } from './chat-page.component';



@NgModule({
  declarations: [
    ChatPageComponent
  ],
  imports: [ 
    NativeScriptCommonModule,
    NativeScriptModule,
  ],
  exports: [
    ChatPageComponent
  ]
})
export class ChatPageModule { }
