import {NgModule }from '@angular/core'; 
import {BrowserModule }from '@angular/platform-browser'; 

import {AppComponent }from './app.component'; 
import {AppRouting }from './app.routes'; 
import {ErrorPageComponent }from './system/error-page/error-page.component';
import { UserEducationComponent } from './user/user-education/user-education.component';
import { IndexComponent } from './user/user-education/index/index.component';
import { UserWorkexperienceComponent } from './user/user-workexperience/user-workexperience.component';
import { UserProjectComponent } from './user/user-project/user-project.component';
import { UserSkillComponent } from './user/user-skill/user-skill.component'; 



@NgModule( {
  declarations:[AppComponent, ErrorPageComponent, UserEducationComponent, IndexComponent, UserWorkexperienceComponent, UserProjectComponent, UserSkillComponent], 
  imports:[BrowserModule, AppRouting], 
  providers:[], 
  bootstrap:[AppComponent]
})
export class AppModule {}
