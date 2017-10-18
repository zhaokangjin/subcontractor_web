import {Routes, RouterModule }from '@angular/router'; 
import {UserWorkexperienceComponent }from './user-workexperience.component'; 
import {IndexComponent }from './index/index.component'; 
import {NgModule }from '@angular/core'; 

const routes:Routes = [ {
    path:'', 
    component:IndexComponent, 
    children:[ {
            path:'', 
            redirectTo:'workexperience', 
            pathMatch:'full'
        },  {
            path:'workexperience', 
            component:UserWorkexperienceComponent
        }
    ]
}]
@NgModule( {
    imports:[RouterModule.forChild(routes)], 
    exports:[RouterModule]    
})
export class UserWorkexperienceRouter {}