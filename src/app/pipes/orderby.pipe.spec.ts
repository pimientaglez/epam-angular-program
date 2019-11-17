import { OrderbyPipe } from './orderby.pipe';
import Course from '../models/Course';

describe('OrderbyPipe', () => {
  let courses: Array<Course> = [
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
  ]

  let orderedCourses: Array<Course> = [
    { 
      id: 2,
      title:'Video Course 2. Angular Advanced',
      creationDate: new Date('11-21-2019'),
      duration: 120,
      topRated: false,
      description:"Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester."
    },
    {
      id: 1,
      title:'Video Course 1. Angular Begginers',
      creationDate: new Date('11-09-2019'),
      duration: 100,
      topRated: true,
      description:"Learn about where you can find course descriptions, what information they include, how they work, and details about various components of a course description. Course descriptions report information about a university or college's classes. They're published both in course catalogs that outline degree requirements and in course schedules that contain descriptions for all courses offered during a particular semester.",
    },
  ]
  const pipe = new OrderbyPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should order courses by creationDate', () => {
    expect(pipe.transform(courses)).toEqual(orderedCourses);
  });
});
