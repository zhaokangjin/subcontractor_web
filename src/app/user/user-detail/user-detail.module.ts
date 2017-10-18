import {NgModule }from '@angular/core'; 
import {CommonModule }from '@angular/common'; 
import {UserDetailComponent }from './user-detail.component'; 
import {UserDetailRouter}from './user-detail.router';
import { IndexComponent } from './index/index.component'
@NgModule( {
imports:[
    CommonModule, UserDetailRouter
  ], 
declarations:[UserDetailComponent, IndexComponent]
})
export class UserDetailModule {}
