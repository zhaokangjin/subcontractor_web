import {NgModule }from '@angular/core'; 
import {CommonModule }from '@angular/common'; 
import {UserLoginComponent }from './user-login.component'; 
import {RouterModule }from '@angular/router'; 
import {UserLoginRouting}from './user-login.routes'; 
import {IndexComponent }from './index/index.component'; 
@NgModule( {
  imports:[
    CommonModule, 
    UserLoginRouting
  ], 
  declarations:[
    UserLoginComponent, 
    IndexComponent]
})
export class UserLoginModule {
}
