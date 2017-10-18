import {Routes, RouterModule }from '@angular/router'; 
import {NgModule }from '@angular/core'; 
import {UserInfoComponent}from './user-info.component'

const router:Routes = [ {
        path:'', 
        redirectTo:'userinfo', 
        pathMatch:'full'
    },  {
        path:'userinfo', 
        component:UserInfoComponent
    }
]
@NgModule( {
    imports:[RouterModule.forChild(router)], 
    exports:[RouterModule]
})
export class UserInfoRouter {}