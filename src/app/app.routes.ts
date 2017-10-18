import {NgModule }from '@angular/core'; 
import {RouterModule, Routes }from '@angular/router'; 

import {ErrorPageComponent }from './system/error-page/error-page.component'; 


const routes:Routes = [ {
    path:'', 
    redirectTo:'login', 
    pathMatch:'full'
  },  {
    path:'login', 
    loadChildren:'./user/user-login/user-login.module#UserLoginModule'
    // component : UserLoginComponent
  },  {
    path:'register', 
    loadChildren:'./user/user-register/user-register.module#UserRegisterModule'
  },  {
    path:'psd', 
    loadChildren:'./user/user-password/user-password.module#UserPasswordModule'
  },  {
    path:'userinfo', 
    loadChildren:'./user/user-info/user-info.module#UserInfoModule'
  },  {
    path:'detail', 
    loadChildren:'./user/user-detail/user-detail.module#UserDetailModule'
  },  {
    path:'**', 
    component:ErrorPageComponent
  }
]; 

@NgModule( {
  imports:[RouterModule.forRoot(routes)], 
  exports:[RouterModule]
})
export class AppRouting {}
