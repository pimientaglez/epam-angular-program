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
  DEFAULT_PAGE_COUNT = '5';

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
  constructor(private http: HttpClient) {}

  getCourses(start?: string, count?: string): Observable<Course[]> {
    const startParam = start || '0';
    const countParam = count || this.DEFAULT_PAGE_COUNT;
    const options = {
      params: new HttpParams().set('start', startParam).set('count', countParam).set('sort', 'date')
    };
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
    return this.http.get<Course>(this.coursesUrl + '/' + id).pipe(
      catchError(this.handleError)
    );
  }

  updateCourse(course: Course) {
    return this.http.patch<Course>(this.coursesUrl + '/' + course.id, course).pipe(
      catchError(this.handleError)
    );
  }

  deleteCourse(id: number) {
    const deleteUrl = this.coursesUrl + '/' + id;
    return this.http.delete(deleteUrl).pipe(
      catchError(this.handleError)
    );
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
  handleError = (error: HttpErrorResponse) => {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
