import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from '@app/login/login.component';
import { LoginService } from '@app/login/login.service';

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
    LoginService,
  ],
  exports: [
    LoginComponent,
  ]
})
export class LoginModule { }
