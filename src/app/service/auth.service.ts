import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { PopupLogic } from '../shared/popup-logic.service';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '../../environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public apiUrl = environment.apiUrl;
  private currentUserSubject: BehaviorSubject<string | null>;
  public currentUser: Observable<string | null>;
  private isAuthenticatedSubject: BehaviorSubject<boolean>;
  public isAuthenticated: Observable<boolean>;
  private jwtHelper = new JwtHelperService();
  private platformId = inject(PLATFORM_ID);

  constructor(
    private http: HttpClient,
    private router: Router,
    private pLogic: PopupLogic
  ) {
    this.currentUserSubject = new BehaviorSubject<string | null>(this.getUsername());
    this.currentUser = this.currentUserSubject.asObservable();
    this.isAuthenticatedSubject = new BehaviorSubject<boolean>(this.isTokenValid());
    this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
  }

  public get currentUserValue(): string | null {
    return this.currentUserSubject.value;
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password })
      .pipe(tap(user => {
        if (user && user.token) {
          this.setAuthenticated(user.token);
        }
      }));
  }

  public setAuthenticated(token: string): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('token', token);
      const decodedToken = this.jwtHelper.decodeToken(token);
      localStorage.setItem('username', decodedToken.sub);
      this.currentUserSubject.next(decodedToken.sub);
    }
    this.isAuthenticatedSubject.next(true);
  }

  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
      localStorage.removeItem('username');
    }
    this.currentUserSubject.next(null);
    this.isAuthenticatedSubject.next(false);
    this.router.navigate(['/']);
  }

  getUsername(): string | null {
    return isPlatformBrowser(this.platformId) ? localStorage.getItem('username') : null;
  }

  isTokenValid(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const token = localStorage.getItem('token');
      return token != null && !this.jwtHelper.isTokenExpired(token);
    }
    return false;
  }

  getToken(): string | null {
    return this.isTokenValid() ? localStorage.getItem('token') : null;
  }

  isUserAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    return !this.jwtHelper.isTokenExpired(token);
  }

  handleBtnClick(): void {
    if (this.isAuthenticatedSubject.value) {
      this.router.navigate(['/profile']);
    } else {
      this.pLogic.loginBtn();
    }
  }
}