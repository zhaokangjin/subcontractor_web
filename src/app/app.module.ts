import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app.routes";
import { ErrorPageComponent } from "./system/error-page/error-page.component";
import { UserListComponent } from "./user/user-list/user-list.component";
import { UserRegisterComponent } from "./user/user-register/user-register.component";
import { HttpModule } from "@angular/http";
import { UserInfoComponent } from './user/user-info/user-info.component'
import {HashLocationStrategy , LocationStrategy} from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
    UserListComponent,
    UserRegisterComponent,
    UserInfoComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpModule],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule {}
