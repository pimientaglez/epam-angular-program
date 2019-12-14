import { Component, OnInit } from '@angular/core';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  userInfo: User;
  constructor(
    private authService: AuthService,
    private router: Router, ) {
  }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (this.authService.isAuthenticated()) {
          this.authService.getUserInfo().subscribe( (res: User) => {
            this.userInfo = res;
          });
        }

      }
    });
  }
}
