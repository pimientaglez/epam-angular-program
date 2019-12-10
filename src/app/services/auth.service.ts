import { Injectable } from '@angular/core';
import User from '../models/User';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { endpoints } from '../utils/endpoints';
import Token from '../models/Token';
import Login from '../models/Login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loginUrl: string = endpoints.base + endpoints.login;
  private userUrl: string = endpoints.base + endpoints.user;

  constructor(private http: HttpClient) { }

  login(credentials: Login): Observable<Token> {
    return this.http.post<Token>(this.loginUrl, credentials);
  }
  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
  }
  isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }
  getUserInfo() {
    const token = localStorage.getItem('token');
    return this.http.post<User>(this.userUrl, token);
  }
  getAuthorizationToken() {
    if (this.isAuthenticated()) {
      return localStorage.getItem('token');
    } else {
      return false;
    }
  }
}
