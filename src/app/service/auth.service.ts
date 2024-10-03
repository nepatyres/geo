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
  private apiUrl = 'http://localhost:8080/api';
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(false);
  private platformId = inject(PLATFORM_ID);

  constructor(private http: HttpClient, private router: Router, private pLogic: PopupLogic) {
    if (isPlatformBrowser(this.platformId)) {
      this.isAuthenticatedSubject.next(!!localStorage.getItem('token'));
    }
  }

  registerUser(data: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data, { withCredentials: true });
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

  private setAuthenticated(token: string): void {
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

  gameStats(data: any): Observable<any> {
    const headers = this.getAuthHeaders();
    return this.http.post(`${this.apiUrl}/gamestats`, { headers, withCredentials: true });
  }

  getGameStats(): Observable<any> {
    return this.http.get(`${this.apiUrl}/gamestats`, { headers: this.getAuthHeaders(), withCredentials: true });
  }

  private getAuthHeaders(): HttpHeaders{
    const token = this.getToken()
    return new HttpHeaders().set('Authorization', `Bearer ${token}`);
  }

  private getToken(): string | null {
    return isPlatformBrowser(this.platformId) ? localStorage.getItem('token') : null;
  }
}