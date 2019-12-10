import { Injectable } from '@angular/core';
import Course from '../models/Course';
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { endpoints } from '../utils/endpoints';
import { catchError } from 'rxjs/operators';
import Author from '../models/Author';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  private coursesUrl: string = endpoints.base + endpoints.courses;
  private authorsUrl: string = endpoints.base + endpoints.authors;

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

  getCourses(start?: string, count?: string): Observable<Course[]> {
    const options = !start ? { params: new HttpParams().set('start', '0').set('count', '5').set('sort', 'date') }:
    { params: new HttpParams().set('start', start).set('count', count).set('sort', 'date') };

    return this.http.get<Course[]>(this.coursesUrl, options).pipe(
      catchError(this.handleError)
    );
  }

  createCourse(course) {
    return this.http.post<Course>(this.coursesUrl, course).pipe(
      catchError(this.handleError)
    );
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

  deleteCourse(id: number) {
    const deleteUrl = this.coursesUrl + '/' + id;
    return this.http.delete<Object>(deleteUrl).pipe(
      catchError(this.handleError)
    );
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

  public filterCoursesByText(text: string): Observable<Course[]> {
    text = text.trim();
    const options = text ? { params: new HttpParams().set('textFragment', text) } : {};
    return this.http.get<Course[]>(this.coursesUrl, options).pipe(
      catchError(this.handleError)
    );
  }
  public getAuthors(text) {
    text = text.trim();
    const options = text ? { params: new HttpParams().set('textFragment', text) } : {};
    return this.http.get<Author[]>(this.authorsUrl, options).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };
}
