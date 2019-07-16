import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@app/auth/auth.service';
import { RoutesList } from '@app/common/routes-list.enum';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.styles.scss']
})
export class RootComponent {
  navItems = [{
    name: 'Dasboard',
    url: `/${RoutesList.DASHBOARD}`,
    icon: 'icon-speedometer'
  }, {
    name: 'Posts',
    url: `/${RoutesList.POSTS}`,
    icon: 'icon-book-open'
  }, {
    name: 'Categories',
    url: `/${RoutesList.CATEGORIES}`,
    icon: 'icon-chart'
  }];

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onLogoutClick() {
    this.authService.logout();

    this.router.navigate([RoutesList.LOGIN]);
  }
}
