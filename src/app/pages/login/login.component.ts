import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';
import { ErrorNotifierService } from 'src/app/services/error-notifier.service';
import { Store } from '@ngrx/store';
import { login } from '../../store/actions/auth.actions';
import Login from 'src/app/models/Login';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  wrongCreds = false;
  loginForm: FormGroup;

  constructor(
    private auth: AuthService,
    private router: Router,
    private loadingService: LoadingService,
    private errorNotifierService: ErrorNotifierService,
    private store: Store<{ credentials: Login }>,
    private formBuilder: FormBuilder, ) { }

    ngOnInit() {
      this.loginForm = this.formBuilder.group({
        email: ['', [
          Validators.required,
        ]],
        password: ['', [
          Validators.required,
        ]],
      });
      this.loginForm.valueChanges.subscribe((values) => {
        console.log(values);
      });
    }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('password');
  }
  login() {
      this.loadingService.setLoadingStatus(true);
      const formValues = this.loginForm.value;
      this.store.dispatch(login({ login: formValues.email, password: formValues.password }));
  }
  shoeErrorMsg(e) {
    this.errorNotifierService.setErrorMsg(e);
    this.loadingService.setLoadingStatus(false);
  }
}
