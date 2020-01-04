import { Component, OnInit, OnDestroy } from '@angular/core';
import User from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { Location } from '@angular/common';
import { LoadingService } from 'src/app/services/loading.service';
import { ErrorNotifierService } from 'src/app/services/error-notifier.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit, OnDestroy {
  userInfo: User;
  path = { current: '' };
  private subscription: Subscription;

  constructor(
    private authService: AuthService,
    private router: Router,
    private location: Location,
    private loadingService: LoadingService,
    private errorNotifierService: ErrorNotifierService,
    ) {
  }

  ngOnInit() {
    this.subscription = this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        if (this.authService.isAuthenticated()) {
          this.authService.getUserInfo().subscribe( (res: User) => {
            this.userInfo = res;
            this.errorNotifierService.setErrorMsg('');
          }, error => { this.shoeErrorMsg(error); });
        }
        this.path =  { current: this.location.path() };
      }
    });
  }
  shoeErrorMsg(e) {
    this.errorNotifierService.setErrorMsg(e);
    this.loadingService.setLoadingStatus(false);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
