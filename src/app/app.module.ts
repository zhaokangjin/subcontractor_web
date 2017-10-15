import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ErrorPageComponent } from './system/error-page/error-page.component';
import { appRoutes } from './app.routes';
@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
