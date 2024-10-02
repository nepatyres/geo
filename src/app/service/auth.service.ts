import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private registerUrl = 'http://localhost:8080/api/register';
  private loginUrl = 'http://localhost:8080/api/login';

  constructor(private http: HttpClient) {}

  registerUser(data: any) {
    return this.http.post(this.registerUrl, data, {withCredentials: true});
  }

  loginUser(data:any){
    return this.http.post(this.loginUrl, data, {withCredentials: true});
  }
}