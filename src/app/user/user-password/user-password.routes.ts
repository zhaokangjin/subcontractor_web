import {Routes, RouterModule }from '@angular/router'; 
import {NgModule }from '@angular/core'; 
import {UserPasswordComponent}from './user-password.component'
const routes:Routes = [ {
    path:'', 
    component:UserPasswordComponent
    }
]

@NgModule( {
    imports:[RouterModule.forChild(routes)], 
    exports:[RouterModule]
})
export class UserPasswordRoute {}