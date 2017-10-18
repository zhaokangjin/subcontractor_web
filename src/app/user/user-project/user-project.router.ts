import {Routes, RouterModule }from '@angular/router'; 
import {NgModule, Component }from '@angular/core'; 
import {IndexComponent}from './index/index.component'
const routes:Routes = [ {
        path:'', 
        component:IndexComponent, 
        children:[ {
                path:'', 
                redirectTo:'education', 
                pathMatch:'full'
            }
        ]
    }
]
@NgModule( {
    imports:[RouterModule.forChild(routes)]
})
export class UserEducationRouter {}