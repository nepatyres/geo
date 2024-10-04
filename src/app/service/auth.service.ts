import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { PopupLogic } from '../shared/popup-logic.service';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public apiUrl = 'http://localhost:8080/api';
  public isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public platformId = inject(PLATFORM_ID);
  private jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient, private router: Router, private pLogic: PopupLogic) {
    if (isPlatformBrowser(this.platformId)) {
      this.isAuthenticatedSubject.next(!!localStorage.getItem('token'));
    }
  }

  loginUser(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, data, { withCredentials: true }).pipe(
      tap((response: any) => {
        if (response && response.token) {
          this.setAuthenticated(response.token);
        }
      })
    );
  }

  public setAuthenticated(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
      const decodedToken = this.jwtHelper.decodeToken(token);
      localStorage.setItem('username', decodedToken.sub);
    }
    this.isAuthenticatedSubject.next(true)
  }

  getUsername(): string | null {
    return isPlatformBrowser(this.platformId) ? localStorage.getItem('username') : null;
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
    }
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/']);
  }

  isLoggedIn(): Observable<boolean> {
    return this.isAuthenticatedSubject.asObservable();
  }

  handleBtnClick(): void {
    if (this.isAuthenticatedSubject.value) {
      this.router.navigate(['/profile']);
    } else {
      this.pLogic.loginBtn();
    }
  }

  isTokenValid(): boolean {
    const token = localStorage.getItem('token');
    return token != null && !this.jwtHelper.isTokenExpired(token);
  }

  getToken(): string | null {
    return this.isTokenValid() ? localStorage.getItem('token') : null;
  }

}