import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { ILoginRequest } from '@app/login/interfaces/login.request';
import { ILoginResponse } from '@app/login/interfaces/login.response';
import { LocalStorageKeys } from '@app/common/local-storage-keys.enum';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpClient,
  ) {}

  login(loginRequest: ILoginRequest): Observable<ILoginResponse> {
    return this.http.post<ILoginResponse>('admin/account/login', loginRequest).pipe(
      tap((res: ILoginResponse) => this.setSession(res.token))
    );
  }

  setSession(token: string): void {
    localStorage.setItem(LocalStorageKeys.AUTH_TOKEN, token);
  }

  getSession(): string {
    return localStorage.getItem(LocalStorageKeys.AUTH_TOKEN);
  }

  logout(): void {
    localStorage.removeItem(LocalStorageKeys.AUTH_TOKEN);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem(LocalStorageKeys.AUTH_TOKEN);
  }
}
