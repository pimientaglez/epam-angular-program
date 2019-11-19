import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  login(){
    this.auth.login({email:this.email, password:this.password});
    this.router.navigate(['/'])
  }
}
