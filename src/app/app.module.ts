import {NgModule }from '@angular/core'; 
import {BrowserModule }from '@angular/platform-browser'; 

import {AppComponent }from './app.component'; 
import {AppRouting }from './app.routes'; 
import {ErrorPageComponent }from './system/error-page/error-page.component'; 



@NgModule( {
  declarations:[AppComponent, ErrorPageComponent], 
  imports:[BrowserModule, AppRouting], 
  providers:[], 
  bootstrap:[AppComponent]
})
export class AppModule {}
