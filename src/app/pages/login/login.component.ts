import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { LoadingService } from 'src/app/services/loading.service';
import { ErrorNotifierService } from 'src/app/services/error-notifier.service';
import { Store } from '@ngrx/store';
import { login } from '../../store/actions/auth.actions';

import Login from 'src/app/models/Login';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent {
  email: string;
  password: string;
  wrongCreds = false;

  constructor(
    private auth: AuthService,
    private router: Router,
    private loadingService: LoadingService,
    private errorNotifierService: ErrorNotifierService,
    private store: Store<{ credentials: Login }>) { }

  login() {
      this.loadingService.setLoadingStatus(true);
      this.store.dispatch(login({ login: this.email, password: this.password }));
  }
  shoeErrorMsg(e) {
    this.errorNotifierService.setErrorMsg(e);
    this.loadingService.setLoadingStatus(false);
  }
}
