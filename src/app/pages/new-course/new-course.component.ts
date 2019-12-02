import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.sass']
})
export class NewCourseComponent implements OnInit {
  section: string = 'New Course';
  constructor( 
    private auth: AuthService,
    private router: Router,) { }

  ngOnInit() {
    if(!this.auth.isAuthenticated()){
      this.router.navigate(['/login'])
    }
  }
  createNewCourse(){
    console.log('Create New Course')
  }
}
