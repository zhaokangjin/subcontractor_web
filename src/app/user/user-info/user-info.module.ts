import {NgModule }from '@angular/core'; 
import {CommonModule }from '@angular/common'; 
import {UserInfoComponent }from './user-info.component'; 
import {UserInfoRouter }from './user-info.router'; 
@NgModule( {
imports:[
    CommonModule, UserInfoRouter
  ], 
declarations:[UserInfoComponent]
})
export class UserInfoModule {}
