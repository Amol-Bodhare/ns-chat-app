import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptCommonModule, NativeScriptFormsModule, NativeScriptModule } from '@nativescript/angular';
import { ChatPageComponent } from './chat-page.component';



@NgModule({
  declarations: [
    ChatPageComponent
  ],
  imports: [ 
    NativeScriptCommonModule,
    NativeScriptFormsModule,
    ReactiveFormsModule
  ],
  exports: [
    ChatPageComponent
  ]
})
export class ChatPageModule { }
