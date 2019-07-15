import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@app/auth/auth.service';
import { ILoginRequest } from '@app/login/interfaces/login.request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  error = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  private navigateToRoot() {
    this.router.navigate(['/']);
  }

  onSubmit(f: NgForm) {
    this.authService.login(f.value as ILoginRequest).subscribe(
      () => this.navigateToRoot(),
      () => this.error = true,
    );
  }

  onCloseError() {
    this.error = false;
  }
}
