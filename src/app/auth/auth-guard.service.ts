import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

import { AuthService } from './auth.service';
import { RoutesList } from '@app/common/routes-list.enum';

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  async canActivate(): Promise<boolean> {
    if (!this.authService.isLoggedIn()) {
      await this.router.navigate([RoutesList.LOGIN]);

      return false;
    }

    return true;
  }
}
