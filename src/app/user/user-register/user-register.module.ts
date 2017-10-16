import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IndexComponent } from './index/index.component';
import { UserRegisterComponent } from './user-register.component';
import { UserRegisterRouteModule } from './user-register.router';

@NgModule({
  imports: [CommonModule, UserRegisterRouteModule],
  declarations: [UserRegisterComponent, IndexComponent]
})
export class UserRegisterModule {}
