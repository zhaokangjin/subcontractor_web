import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ErrorPageComponent } from "./system/error-page/error-page.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { UserRegisterComponent } from "./user/user-register/user-register.component";
import { UserInfoComponent } from './user/user-info/user-info.component';
const routes: Routes = [
  { path: "", redirectTo: "userInfo", pathMatch: "full" },
  { path: "user", loadChildren: "./user/user.module#UserModule" },
  {
    path: "register",
    component: UserRegisterComponent
  },
  {
    path: "userInfo",
    component: UserInfoComponent
  },
  { path: "userList", component: UserListComponent },
  { path: "**", component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
