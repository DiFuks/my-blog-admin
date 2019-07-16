import { Inject, Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { API_URL } from '@app/common/token.exports';
import { AuthService } from '@app/auth/auth.service';
import { LocalStorageKeys } from '@app/common/local-storage-keys.enum';

@Injectable()
export class APIInterceptor implements HttpInterceptor {
  constructor(
    @Inject(API_URL) private apiUrl: string,
    private authService: AuthService,
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const apiReq = req.clone({
      url: `${this.apiUrl}${req.url}`,
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.authService.getSession()}`,
        'x-session-token': localStorage.getItem(LocalStorageKeys.USER_SESSION_TOKEN),
      })
    });

    return next.handle(apiReq);
  }
}
