import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'https://geoquiz-436820.lm.r.appspot.com/api/register';

  constructor(private http: HttpClient) {}

  registerUser(data: any) {
    return this.http.post(this.apiUrl, data, {withCredentials: true});
  }
}