import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { LoginService } from '@app/login/login.service';
import { ILoginRequest } from '@app/login/interfaces/login.request';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  error = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {}

  private navigateToRoot() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    if (this.loginService.isLoggedIn()) {
      this.navigateToRoot();
    }
  }

  onSubmit(f: NgForm) {
    this.loginService.login(f.value as ILoginRequest).subscribe(
      () => this.navigateToRoot(),
      () => this.error = true,
    );
  }

  onCloseError() {
    this.error = false;
  }
}
