import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { Lib2Module } from '@ttestman4/lib2';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Lib2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
