import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { RoutesList } from '@app/common/routes-list.enum';
import { AuthService } from './auth.service';

@Injectable()
export class AuthEmptyGuardService implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  async canActivate(): Promise<boolean> {
    if (this.authService.isLoggedIn()) {
      await this.router.navigate([RoutesList.DASHBOARD]);

      return false;
    }

    return true;
  }
}
