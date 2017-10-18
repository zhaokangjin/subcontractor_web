import {NgModule }from '@angular/core'; 
import {RouterModule }from '@angular/router'; 
import {Routes }from '@angular/router'; 
import {UserSkillComponent}from './user-skill.component'; 
import {IndexComponent }from './index/index.component'; 
const routes:Routes = [ {
    path:'', 
    component:IndexComponent, 
    children:[ {
        path:'', 
        redirectTo:'skill', 
        pathMatch:'full'
    },  {
            path:'skill', 
        component:UserSkillComponent  
    }
        ]
    }
]
@NgModule( {
    imports:[RouterModule.forChild(routes)], 
    exports:[RouterModule]    
})
export class UserSkillRouter {}
