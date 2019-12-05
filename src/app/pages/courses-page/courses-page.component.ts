import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.sass']
})
export class CoursesPageComponent implements OnInit {
  constructor(
    private auth: AuthService,
    private router: Router, ) { }

    ngOnInit() {
      if (!this.auth.isAuthenticated()) {
        this.router.navigate(['/login']);
      }
    }
}
