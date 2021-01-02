import { NgModule } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { UsersPageComponent } from './users-page.component';



@NgModule({
  declarations: [
    UsersPageComponent
  ],
  imports: [ 
    NativeScriptCommonModule
  ]
})
export class UsersPageModule { }
