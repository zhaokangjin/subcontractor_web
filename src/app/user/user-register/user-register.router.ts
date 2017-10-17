import {NgModule }from '@angular/core'; 
import {RouterModule, Routes }from '@angular/router'; 

import {IndexComponent }from './index/index.component'; 
import {UserRegisterComponent }from './user-register.component'; 

const routes:Routes = [ {
    path:'', 
    component:IndexComponent, 
    children:[ {
        path:'', 
        redirectTo:'login', 
        pathMatch:'full'
      },  {
        path:'login', 
        component:UserRegisterComponent
      }
    ]
  }
]; 

@NgModule( {
  imports:[RouterModule.forChild(routes)], 
  exports:[RouterModule]
})
export class UserRegisterRoute {}
