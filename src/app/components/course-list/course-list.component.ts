import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.sass']
})
export class CourseListComponent implements OnInit {
  public courses:Array<Course> = [
    {
      id: 1,
      title:'Video Course 1. Name Tag',
      creationDate: new Date('11-09-2018'),
      duration: '1h 28min',
      description:"Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester."
    },
    { 
      id: 2,
      title:'Video Course 2. Name Tag',
      creationDate: new Date('11-09-2018'),
      duration: '1h 28min',
      description:"Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester."
    },
    { id: 3,
      title:'Video Course 3. Name Tag',
      creationDate: new Date('11-09-2018'),
      duration: '1h 28min',
      description:"Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester."
    },
    { id: 4,
      title:'Video Course 4. Name Tag',
      creationDate: new Date('11-09-2018'),
      duration: '1h 28min',
      description:"Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester."
    }
  ]
  constructor() { }

  ngOnInit() {
  }

  deleteCourse(id){
    console.log('Delete course with ID: ', id)
  }
}
