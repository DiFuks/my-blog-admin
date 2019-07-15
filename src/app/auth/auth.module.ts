import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from '@app/auth/auth.service';
import { AuthGuardService } from '@app/auth/auth-guard.service';
import { AuthEmptyGuardService } from '@app/auth/auth-empty-guard.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    AuthEmptyGuardService,
  ],
})
export class AuthModule {}
