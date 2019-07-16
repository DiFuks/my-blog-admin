import { Routes } from '@angular/router';

import { RoutesList } from '@app/common/routes-list.enum';
import { LoginComponent } from '@app/login/login.component';
import { AuthEmptyGuardService } from '@app/auth/auth-empty-guard.service';
import { RootComponent } from '@app/root/root.component';
import { AuthGuardService } from '@app/auth/auth-guard.service';
import { PostComponent } from '@app/post/post.component';
import { DashboardComponent } from '@app/dashboard/dashboard.component';
import { CategoryComponent } from '@app/category/category.component';

export const routes: Routes = [{
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
      path: RoutesList.CATEGORIES,
      component: CategoryComponent,
    }, {
      path: RoutesList.DASHBOARD,
      component: DashboardComponent,
    }, {
      path: '**',
      redirectTo: RoutesList.DASHBOARD,
    }]
}];
