import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from '@app/login/login.component';
import { LoginModule } from '@app/login/login.module';
import { RootComponent } from '@app/root/root.component';
import { RootModule } from '@app/root/root.module';
import { AuthGuardService } from '@app/auth/auth-guard.service';
import { AuthEmptyGuardService } from '@app/auth/auth-empty-guard.service';
import { RoutesList } from '@app/common/routes-list.enum';
import { PostComponent } from '@app/post/post.component';
import { DashboardComponent } from '@app/dashboard/dashboard.component';

const routes: Routes = [{
  path: RoutesList.LOGIN,
  component: LoginComponent,
  canActivate: [AuthEmptyGuardService],
}, {
  path: '',
  component: RootComponent,
  canActivate: [AuthGuardService],
  children: [{
    path: RoutesList.POSTS,
    component: PostComponent,
  }, {
    path: RoutesList.DASHBOARD,
    component: DashboardComponent,
  }]
}];

@NgModule({
  imports: [
    LoginModule,
    RootModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
