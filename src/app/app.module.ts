import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserServiceComponent } from './user/user-service/user-service.component';
import { UserTestComponent } from './user/user-test/user-test.component';
import { QueryListComponent } from './user/query-list/query-list.component';

@NgModule({
  declarations: [
    AppComponent,
    UserServiceComponent,
    UserTestComponent,
    QueryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
