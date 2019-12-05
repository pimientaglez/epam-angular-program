import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router, NavigationEnd} from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.sass']
})
export class UserSectionComponent implements OnInit {
  public id: number;
  public firstName: string;
  public lastName: string;
  currentPath: string;
  isUserLoggedIn: boolean;
  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location, ) {
  }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.currentPath = this.location.path();
        this.isUserLoggedIn = this.authService.isAuthenticated();
      }
    });
  }
  goToLoginPage() {
    this.router.navigate(['/login']);
  }
  logOut() {
    this.authService.logout();
    window.location.reload();
  }
}
