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
  wrong_creds: boolean = false;

  constructor(
    private auth: AuthService,
    private router: Router) { }

  ngOnInit() {
  }

  login(){
    const creds = this.auth.getCredentials();
    if(creds.email === this.email && creds.password === this.password){
      this.wrong_creds = true;
      this.auth.login({email:this.email, password:this.password});
      this.router.navigate(['/'])
    }else{
      this.wrong_creds = true;
    }
  }
}
