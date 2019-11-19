import { Injectable } from '@angular/core';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loginCredentials: Object;
  user: User = {
    id: 1,
    firstName: 'John',
    lastName: 'Doe'
  }

  constructor() { }

  login(credentials){
    localStorage.setItem("user", JSON.stringify(this.user));
    localStorage.setItem("token", '12345abcde');
    console.log('user logged in successfully!')
  }
  logout(){
    localStorage.removeItem("user");
    localStorage.removeItem("token");
  }
  isAuthenticated():boolean {
    let user = localStorage.getItem("user");
    if(user){
      return true
    }else{
      return false;
    }
    console.log('user logged out successfully!')
  }

  getUserInfo() {
    return this.user;
  }
}
