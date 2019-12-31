import { Component, Input, OnChanges, SimpleChanges, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import {Router, NavigationEnd} from '@angular/router';
import { Location } from '@angular/common';
import User from 'src/app/models/User';
import { LoadingService } from 'src/app/services/loading.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-user-section',
  templateUrl: './user-section.component.html',
  styleUrls: ['./user-section.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserSectionComponent implements OnChanges, OnDestroy  {
  public id: number;
  @Input() userInfo: User;
  @Input() path;
  isUserLoggedIn: string;
  firstName: string;
  lastName: string;
  private subscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingService: LoadingService, ) {
    }
    ngOnChanges(changes: SimpleChanges) {
      console.log(changes);
      if (changes.userInfo) {
        if (changes.userInfo.currentValue) {
          this.firstName = changes.userInfo.currentValue.name.first;
          this.lastName = changes.userInfo.currentValue.name.last;
        }
      }
    }

  logOut() {
    this.loadingService.setLoadingStatus(true);
    setTimeout( () => {
      this.authService.logout();
      this.router.navigate(['/login']);
      this.loadingService.setLoadingStatus(false);
    }, 1500 );
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
