import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router, NavigationEnd} from '@angular/router';
import { Location } from '@angular/common';
import User from 'src/app/models/User';
import { LoadingService } from 'src/app/services/loading.service';


@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.sass']
})
export class UserSectionComponent implements OnInit, OnChanges {
  public id: number;
  @Input() userInfo: User;
  currentPath: string;
  isUserLoggedIn: string;
  firstName: string;
  lastName: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location,
    private loadingService: LoadingService, ) {
    }
    ngOnChanges(changes: SimpleChanges) {
      if (changes.userInfo.currentValue) {
        this.firstName = changes.userInfo.currentValue.name.first;
        this.lastName = changes.userInfo.currentValue.name.last;
      }
    }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.currentPath = this.location.path();
      }
    });
  }
  logOut() {
    this.loadingService.setLoadingStatus(true);
    setTimeout( () => {
      this.authService.logout();
      this.router.navigate(['/login']);
      this.loadingService.setLoadingStatus(false);
    }, 1500 );
  }
}
