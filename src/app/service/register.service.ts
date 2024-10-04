import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {

  constructor(private http: HttpClient, private authService: AuthService) { }

  registerUser(data: any): Observable<any> {
    return this.http.post(`${this.authService.apiUrl}/register`, data, { withCredentials: true }).pipe(
      tap((response: any) => {
        if (response && response.token) {
          this.authService.setAuthenticated(response.token);
        }
      })
    )
  }
}