import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://geo-backend.vercel.app/api/register';

  constructor(private http: HttpClient) {}

  registerUser(data: any) {
    return this.http.post(this.apiUrl, data);
  }
}