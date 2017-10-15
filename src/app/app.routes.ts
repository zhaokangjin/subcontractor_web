import { RouterModule } from '@angular/router';
import { Component, NgModule } from '@angular/core';
import { AppComponent} from './app.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { ErrorPageComponent } from './system/error-page/error-page.component';

export const appRoutes=[
    {
		path:'',
		redirectTo:'login',
		pathMatch:'full'
	},
	{
		path:"login",
		component:UserLoginComponent
	},
	{
		path:"**",
		component:ErrorPageComponent
	}
];