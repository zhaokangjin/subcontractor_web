import {NgModule }from '@angular/core'; 
import {Routes, RouterModule }from '@angular/router'; 
import {UserLoginComponent}from './user-login.component'; 
import {IndexComponent }from './index/index.component'; 
const routes:Routes = [ {
    path:'', 
    component:IndexComponent, 
    children:[ {
        path:'', 
        component:UserLoginComponent
    }]
    }
]; 

@NgModule( {
  imports:[RouterModule.forChild(routes)], 
  exports:[RouterModule]
})
export class UserLoginRouting {}
