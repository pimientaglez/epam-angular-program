import { Injectable } from '@angular/core';
import User from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: User;
  constructor() { }

  login(user: User){
    if(user){
      this.user = user;
      localStorage.setItem("user", this.user.toString());
      localStorage.setItem("token", '12345abcde');
    }
  }
  logout(){
    if(this.user){
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    }

  }
  isAuthenticated():boolean {
    let user = localStorage.getItem("user");
    if(user){
      return true
    }else{
      return false;
    }
  }

  getUserInfo():User {
    return this.user;
  }
}
