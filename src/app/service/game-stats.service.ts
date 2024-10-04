import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
    providedIn: 'root',
})
export class GameStatsService {

    constructor(private http: HttpClient, private authService: AuthService) { }

    gameStats(data: any): Observable<any> {
        const headers = this.getAuthHeaders();
        return this.http.post(`${this.authService.apiUrl}/gamestats`, data, { headers, withCredentials: true });
    }

    getGameStats(): Observable<any> {
        return this.http.get(`${this.authService.apiUrl}/gamestats`, { headers: this.getAuthHeaders(), withCredentials: true });
    }

    private getAuthHeaders(): HttpHeaders {
        const token = this.getToken()
        return new HttpHeaders().set('Authorization', `Bearer ${token}`);
    }

    private getToken(): string | null {
        return isPlatformBrowser(this.authService.platformId) ? localStorage.getItem('token') : null;
    }
}