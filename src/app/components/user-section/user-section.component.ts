import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';
import { Location } from "@angular/common";


@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.sass']
})
export class UserSectionComponent implements OnInit{
  public id:number;
  public firstName:string;
  public lastName:string;
  currentPath: string;
  isUserLoggedIn: boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location){
  }

  ngOnInit(){
    this.currentPath = this.location.path();
    this.isUserLoggedIn = this.authService.isAuthenticated();
    console.log('is user logged in',this.isUserLoggedIn);
    console.log('current path',this.currentPath);
  }
  goToLoginPage(){
    this.router.navigate(['/login']);
  }
}
