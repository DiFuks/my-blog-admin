import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '@app/login/login.component';
import { LoginModule } from '@app/login/login.module';
import { RootComponent } from '@app/root/root.component';
import { RootModule } from '@app/root/root.module';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
}, {
  path: '',
  component: RootComponent,
}];

@NgModule({
  imports: [
    LoginModule,
    RootModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
