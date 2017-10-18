import {Routes, RouterModule }from '@angular/router'; 
import {NgModule, Component }from '@angular/core'; 
import {UserDetailComponent }from './user-detail.component'
import {UserInfoComponent }from '../user-info/user-info.component'; 
import {IndexComponent }from './index/index.component'; 
const routes:Routes = [ {
    path:'', 
    component:IndexComponent, 
    children:[ {
            path:'userinfo', 
            redirectTo:'userinfo', 
            pathMatch:'full'
        }
    ]
}
]
@NgModule( {
    imports:[RouterModule.forChild(routes)], 
    exports:[RouterModule]
})
export class UserDetailRouter {}