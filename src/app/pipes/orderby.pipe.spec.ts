import { OrderbyPipe } from './orderby.pipe';
import Course from '../models/Course';

describe('OrderbyPipe', () => {
  const courses: Array<Course> = [
    {
      id: 1,
      title: 'Video Course 1. Angular Begginers',
      creationDate: new Date('11-09-2019'),
      duration: 100,
      topRated: true,
      authors: ['John', 'Max', 'Ana'],
      description: 'Learn about where you can find course descriptions, what information they include,',
    },
    {
      id: 2,
      title: 'Video Course 2. Angular Advanced',
      creationDate: new Date('11-21-2019'),
      duration: 120,
      topRated: false,
      authors: ['John', 'Max', 'Ana'],
      description: 'Learn about where you can find course descriptions, what information they include,'
    },
  ];

  const orderedCourses: Array<Course> = [
    {
      id: 2,
      title: 'Video Course 2. Angular Advanced',
      creationDate: new Date('11-21-2019'),
      duration: 120,
      topRated: false,
      authors: ['John', 'Max', 'Ana'],
      description: 'Learn about where you can find course descriptions, what information they include,'
    },
    {
      id: 1,
      title: 'Video Course 1. Angular Begginers',
      creationDate: new Date('11-09-2019'),
      duration: 100,
      topRated: true,
      authors: ['John', 'Max', 'Ana'],
      description: 'Learn about where you can find course descriptions, what information they include,',
    },
  ];
  const pipe = new OrderbyPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should order courses by creationDate', () => {
    expect(pipe.transform(courses)).toEqual(orderedCourses);
  });
});
