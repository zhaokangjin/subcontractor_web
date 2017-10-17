import {CommonModule }from '@angular/common'; 
import {NgModule }from '@angular/core'; 

import {IndexComponent }from './index/index.component'; 
import {UserRegisterComponent }from './user-register.component'; 
import {UserRegisterRoute }from './user-register.router'; 

@NgModule( {
  imports:[CommonModule, UserRegisterRoute], 
  declarations:[UserRegisterComponent, IndexComponent]
})
export class UserRegisterModule {}
