import { Component } from '@angular/core';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.sass']
})
export class NewCourseComponent {
  section = 'New Course';
  constructor( ) {}

  createNewCourse() {
    console.log('Create New Course');
  }
}
