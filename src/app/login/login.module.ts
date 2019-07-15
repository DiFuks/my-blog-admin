import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '@app/login/login.component';
import { AuthService } from '@app/auth/auth.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbAlertModule,
  ],
  declarations: [
    LoginComponent,
  ],
  providers: [
    AuthService,
  ],
  exports: [
    LoginComponent,
  ]
})
export class LoginModule { }
