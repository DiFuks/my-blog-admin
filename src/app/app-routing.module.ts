import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LoginModule } from '@app/login/login.module';
import { RootModule } from '@app/root/root.module';
import { routes } from '@app/common/routes';


@NgModule({
  imports: [
    LoginModule,
    RootModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
