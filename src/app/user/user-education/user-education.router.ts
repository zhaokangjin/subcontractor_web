import {NgModule }from '@angular/core'; 
import {Routes, RouterModule }from '@angular/router'; 
import {IndexComponent}from './index/index.component'; 
import {UserEducationComponent}from './user-education.component'
const routes:Routes = [ {
        path:'', 
        component:IndexComponent, 
        children:[ {
                path:'', 
                redirectTo:'education', 
                pathMatch:'full'
            },  {
                path:'', 
                component:UserEducationComponent
            }
        ]
    }
]
@NgModule( {
    imports:[RouterModule.forChild(routes)], 
    exports:[RouterModule]
})
export class UserEducationRouter {}