import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserRouter } from "./user.router";
import { HttpModule } from "@angular/http";

import { IndexComponent } from "./index/index.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserEducationComponent } from "./user-education/user-education.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserPasswordComponent } from "./user-password/user-password.component";
import { UserProjectComponent } from "./user-project/user-project.component";
import { UserSkillComponent } from "./user-skill/user-skill.component";
import { UserWorkexperienceComponent } from "./user-workexperience/user-workexperience.component";
// import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  imports: [CommonModule, UserRouter, HttpModule],
  declarations: [
    UserDetailComponent,
    IndexComponent,
    UserDetailComponent,
    UserEducationComponent,
    UserLoginComponent,
    UserPasswordComponent,
    UserProjectComponent,
    UserSkillComponent,
    UserWorkexperienceComponent
    
  ]
})
export class UserModule {}
