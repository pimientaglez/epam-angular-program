import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

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
    private router: Router) { }

  login() {
    const creds = this.auth.getCredentials();
    if (creds.email === this.email && creds.password === this.password) {
      this.wrongCreds = true;
      this.auth.login( { email: this.email, password: this.password } );
      this.router.navigate(['/']);
    } else {
      this.wrongCreds = false;
    }
  }
}
