import {NgModule }from '@angular/core'; 
import {CommonModule }from '@angular/common'; 
import {UserPasswordComponent}from './user-password.component'; 
import {UserPasswordRoute}from './user-password.routes'
@NgModule( {
imports:[
    CommonModule, UserPasswordRoute
  ], 
declarations:[UserPasswordComponent ]
})
export class UserPasswordModule {}
