import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.sass']
})
export class AddCourseComponent{
  
  constructor(private router: Router){
  }
  goToNewCourse(){
    this.router.navigate(['/new']);
  }
}
