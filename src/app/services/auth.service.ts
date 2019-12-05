import { Injectable } from '@angular/core';
import User from '../models/User';

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
  credentials: {email: string, password: string} =  {
    email: 'user@epam.com',
    password: 'pass123'
  };

  constructor() { }

  login(credentials) {
    localStorage.setItem('user', JSON.stringify(this.user) );
    localStorage.setItem('token', '12345abcde');
    console.log('user logged in successfully!');
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
  getCredentials() {
    return this.credentials;
  }
}
