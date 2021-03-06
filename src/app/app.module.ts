import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { APIInterceptor } from '@app/common/http.interceptor';
import { API_URL } from '@app/common/token.exports';
import { environment } from '@environments/environment';
import { AuthModule } from '@app/auth/auth.module';
import { PostModule } from '@app/post/post.module';
import { DashboardModule } from '@app/dashboard/dashboard.module';
import { AppBreadcrumbModule } from '@coreui/angular';
import { CategoryModule } from '@app/category/category.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModule,
    PostModule,
    CategoryModule,
    DashboardModule,
    AppBreadcrumbModule.forRoot(),
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: APIInterceptor,
    multi: true,
  }, {
    provide: API_URL,
    useValue: environment.apiUrl,
  }],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
