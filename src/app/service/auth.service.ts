import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { PopupLogic } from '../shared/popup-logic.service';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public apiUrl = 'http://localhost:8080/api';
  public isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  public platformId = inject(PLATFORM_ID);

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
    }
    this.isAuthenticatedSubject.next(true)
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
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

  CheckAuthStatus(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.validateToken(token).subscribe(
        isValid => {
          this.isAuthenticatedSubject.next(isValid);
        },
        error => {
          console.error('Error validating token:', error);
          this.logout();
        }
      );
    } else {
      this.isAuthenticatedSubject.next(false);
    }
  }

  validateToken(token: string): Observable<boolean> {
    return this.http.post<boolean>(`${this.apiUrl}/validate-token`, { token });
  }
}