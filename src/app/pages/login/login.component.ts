import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CourseServiceService } from 'src/app/services/course-service.service';

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
    private courses: CourseServiceService) { }

  login() {
      this.auth.login( { login: this.email, password: this.password } ).subscribe(
      res => {
          localStorage.setItem('user', this.email );
          localStorage.setItem('token', res.token);
          this.router.navigate(['/']);
        }, error => {
          this.wrongCreds = true;
        }
      );
  }
}
