import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class AuthService{
    private apiUrl = `${environment.apiUrl}/register`;

    constructor(private http: HttpClient){}

    registerUser(userData: any): Observable<any>{
        return this.http.post(this.apiUrl, userData)
    }
}