import { Component } from '@angular/core';
import { LoginService } from '@app/login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.styles.scss']
})
export class RootComponent {
  constructor(
    private loginService: LoginService
  ) {}

  onLogoutClick() {
    this.loginService.logout();
  }
}
