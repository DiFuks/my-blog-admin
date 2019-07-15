import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '@app/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.styles.scss']
})
export class RootComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  onLogoutClick() {
    this.authService.logout();

    this.router.navigate(['/login']);
  }
}
