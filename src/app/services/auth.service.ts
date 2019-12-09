import { Injectable } from '@angular/core';
import User from '../models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { endpoints } from '../endpoints';
import Token from '../models/Token';
import Login from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginCredentials;
  user: User = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe'
  };
  loginUrl: string = endpoints.base + endpoints.login;

  constructor(private http: HttpClient) { }

  login(credentials: Login): Observable<Token> {
    return this.http.post<Token>(this.loginUrl, credentials);
  }
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
  isAuthenticated(): boolean {
    const user = localStorage.getItem('user');
    if (user) {
      return true;
    } else {
      return false;
    }
  }
  getUserInfo() {
    return this.user;
  }
}
