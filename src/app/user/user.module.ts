import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { UserRouter } from "./user.router";
import { IndexComponent } from "./index/index.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserEducationComponent } from "./user-education/user-education.component";
import { UserInfoComponent } from "./user-info/user-info.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserPasswordComponent } from "./user-password/user-password.component";
import { UserProjectComponent } from "./user-project/user-project.component";
import { UserRegisterComponent } from "./user-register/user-register.component";
import { UserSkillComponent } from "./user-skill/user-skill.component";
import { UserWorkexperienceComponent } from "./user-workexperience/user-workexperience.component";

@NgModule({
  imports: [CommonModule, UserRouter],
  declarations: [
    UserDetailComponent,
    IndexComponent,
    UserDetailComponent,
    UserEducationComponent,
    UserInfoComponent,
    UserLoginComponent,
    UserPasswordComponent,
    UserProjectComponent,
    UserRegisterComponent,
    UserSkillComponent,
    UserWorkexperienceComponent
  ]
})
export class UserModule {}
