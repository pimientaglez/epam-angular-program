import { Injectable } from '@angular/core';
import Course from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  courses: Array<Course> = [
    {
      id: 1,
      title:'Video Course 1. Angular Begginers',
      creationDate: new Date('11-09-2019'),
      duration: 100,
      topRated: true,
      description:"Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    },
    { 
      id: 2,
      title:'Video Course 2. Angular Advanced',
      creationDate: new Date('11-21-2019'),
      duration: 120,
      topRated: false,
      description:"Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester."
    },
    { id: 3,
      title:'Video Course 3. React Begginers',
      creationDate: new Date('09-09-2019'),
      duration: 200,
      topRated: false,
      description:"Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester."
    },
    { id: 4,
      title:'Video Course 4. React Advanced',
      creationDate: new Date('11-28-2019'),
      duration: 10,
      topRated: true,
      description:"Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester."
    },
  ]
  getCourses():Array<Course>{
    return this.courses;
  }
}
