import { Injectable } from '@angular/core';
import Course from '../models/Course';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { endpoints } from '../utils/endpoints';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  private coursesUrl: string = endpoints.base + endpoints.courses;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  courses: Array<Course> = [
    {
      id: 1,
      name: 'Video Course 1. Angular Begginers',
      date: '2016-05-31T02:02:36+00:00',
      length: 100,
      isTopRated: true,
      authors: ['John', 'Max', 'Ana'],
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.',
    },
    {
      id: 2,
      name: 'Video Course 2. Angular Advanced',
      date: '2016-05-31T02:02:36+00:00',
      length: 120,
      isTopRated: false,
      authors: ['John', 'Max', 'Ana'],
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
    },
    { id: 3,
      name: 'Video Course 3. React Begginers',
      date: '2016-05-31T02:02:36+00:00',
      length: 200,
      isTopRated: false,
      authors: ['John', 'Max', 'Ana'],
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
    },
    { id: 4,
      name: 'Video Course 4. React Advanced',
      date: '2016-05-31T02:02:36+00:00',
      length: 10,
      isTopRated: true,
      authors: ['John', 'Max', 'Ana'],
      description: 'Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college\'s classes. They\'re published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.'
    },
  ];
  constructor(private http: HttpClient) {}

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.coursesUrl);
  }

  createCourse(course) {
    course.id = this.courses.length;
    this.courses.push(course);
  }

  getCourseById(id: number) {
    let courseFiltered: Course;
    courseFiltered = this.filterCourse(id);
    return courseFiltered;
  }

  updateCourse(course: Course) {
    let courseIndex: number;
    courseIndex = this.getCourseIndex(course.id);
    this.courses[courseIndex] = course;
  }

  removeItem(id: number) {
    let courseIndex: number;
    courseIndex = this.getCourseIndex(id);
    this.courses.splice(courseIndex, 1);
  }

  private filterCourse(id: number): Course {
    let courseFiltered: Course[] = [];
    courseFiltered = this.courses.filter( course => course.id === id );
    return courseFiltered[0];
  }

  private getCourseIndex(id) {
    const index = this.courses.findIndex(course => {
      return course.id === id;
    });
    return index;
  }
}
