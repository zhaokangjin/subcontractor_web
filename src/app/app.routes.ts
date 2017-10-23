import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ErrorPageComponent } from "./system/error-page/error-page.component";
import { UserListComponent } from "./user/user-list/user-list.component";
const routes: Routes = [
  { path: "", redirectTo: "user", pathMatch: "full" },
  { path: "user", loadChildren: "./user/user.module#UserModule" },
  { path: "userList", component: UserListComponent },
  { path: "**", component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
