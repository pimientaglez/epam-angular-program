import { Injectable } from '@angular/core';
import Course from '../models/Course';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {
  courses: Array<Course> = [
    {
      id: 1,
      title: 'Video Course 1. Angular Begginers',
      creationDate: new Date('11-09-2019'),
      duration: 100,
      topRated: true,
      authors: ['John', 'Max', 'Ana'],
      description: 'Learn about where you can find course descriptions, what information they include, how they work',
    },
    {
      id: 2,
      title: 'Video Course 2. Angular Advanced',
      creationDate: new Date('11-21-2019'),
      duration: 120,
      topRated: false,
      authors: ['John', 'Max', 'Ana'],
      description: 'Learn about where you can find course descriptions, what information they include, how they work'
    },
    { id: 3,
      title: 'Video Course 3. React Begginers',
      creationDate: new Date('09-09-2019'),
      duration: 200,
      topRated: false,
      authors: ['John', 'Max', 'Ana'],
      description: 'Learn about where you can find course descriptions, what information they include, how they work'
    },
    { id: 4,
      title: 'Video Course 4. React Advanced',
      creationDate: new Date('11-28-2019'),
      duration: 10,
      topRated: true,
      authors: ['John', 'Max', 'Ana'],
      description: 'Learn about where you can find course descriptions, what information they include, how they work'
    },
  ];
  getCourses(): Array<Course> {
    return this.courses;
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
