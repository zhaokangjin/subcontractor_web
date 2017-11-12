import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { UserModule } from "./user.module";
import { IndexComponent } from "./index/index.component";
import { UserDetailComponent } from "./user-detail/user-detail.component";
import { UserEducationComponent } from "./user-education/user-education.component";
import { UserLoginComponent } from "./user-login/user-login.component";
import { UserPasswordComponent } from "./user-password/user-password.component";
import { UserProjectComponent } from "./user-project/user-project.component";
import { UserRegisterComponent } from "./user-register/user-register.component";
import { UserSkillComponent } from "./user-skill/user-skill.component";
import { UserWorkexperienceComponent } from "./user-workexperience/user-workexperience.component";

// import { UserListComponent } from "./user-list/user-list.component";
const routes: Routes = [
  {
    path: "",
    component: IndexComponent,
    children: [
      {
        path: "detail",
        component: UserDetailComponent
      },
      {
        path: "education",
        component: UserEducationComponent
      },
      {
        path: "login",
        component: UserLoginComponent
      },
      {
        path: "password",
        component: UserPasswordComponent
      },
      {
        path: "project",
        component: UserProjectComponent
      },
      {
        path: "skill",
        component: UserSkillComponent
      },
      {
        path: "work",
        component: UserWorkexperienceComponent
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRouter {}
