import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.sass']
})
export class NewCourseComponent implements OnInit {
  section: string = 'New Course';
  constructor() { }

  ngOnInit() {
  }
  createNewCourse(){
    console.log('Create New Course')
  }
}
