import {NgModule }from '@angular/core'; 
import {Routes, RouterModule }from '@angular/router'; 
import {ErrorPageComponent }from './system/error-page/error-page.component'; 
const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', loadChildren: './user/user.module#UserModule' },
  { path: '**', component: ErrorPageComponent }
]; 

@NgModule( {
  imports:[RouterModule.forRoot(routes)], 
  exports:[RouterModule]
})
export class AppRoutingModule {}