import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NativeScriptFormsModule } from '@nativescript/angular';
import { LoginComponent } from './login.component';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    NativeScriptFormsModule,
    ReactiveFormsModule,
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
