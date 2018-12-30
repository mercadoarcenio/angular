
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import{ routing, appRoutingProviders } from './app.routing';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{ LoginComponent } from './components/login.component';
import{ RegisterComponent } from './components/register.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [
   appRoutingProviders
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
