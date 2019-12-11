import { OrderbyPipe } from './orderby.pipe';
import Course from '../models/Course';

describe('OrderbyPipe', () => {
  const courses: Array<Course> = [
    {
      id: 1,
      name: 'Video Course 1. Angular Begginers',
      date: '11-09-2019',
      length: 100,
      isTopRated: true,
      authors: [
        {
          id: '5b7a846290d6ff6894377fb5',
          name : 'Decker Albert'
        },
        {
          id: '5b7a84624010db4d640e0099',
          name: 'Vincent Doyle'
        },
        {
          id: '5b7a8462e720a86db64774e7',
          name: 'Padilla Berger'
        }
      ],
      description: 'Learn about where you can find course descriptions, what information they include,',
    },
    {
      id: 2,
      name: 'Video Course 2. Angular Advanced',
      date: '11-21-2019',
      length: 120,
      isTopRated: false,
      authors: [
        {
          id: '5b7a846290d6ff6894377fb5',
          name : 'Decker Albert'
        },
        {
          id: '5b7a84624010db4d640e0099',
          name: 'Vincent Doyle'
        },
        {
          id: '5b7a8462e720a86db64774e7',
          name: 'Padilla Berger'
        }
      ],
      description: 'Learn about where you can find course descriptions, what information they include,'
    },
  ];

  const orderedCourses: Array<Course> = [
    {
      id: 2,
      name: 'Video Course 2. Angular Advanced',
      date: '11-21-2019',
      length: 120,
      isTopRated: false,
      authors: [
        {
          id: '5b7a846290d6ff6894377fb5',
          name : 'Decker Albert'
        },
        {
          id: '5b7a84624010db4d640e0099',
          name: 'Vincent Doyle'
        },
        {
          id: '5b7a8462e720a86db64774e7',
          name: 'Padilla Berger'
        }
      ],
      description: 'Learn about where you can find course descriptions, what information they include,'
    },
    {
      id: 1,
      name: 'Video Course 1. Angular Begginers',
      date: '11-09-2019',
      length: 100,
      isTopRated: true,
      authors: [
        {
          id: '5b7a846290d6ff6894377fb5',
          name : 'Decker Albert'
        },
        {
          id: '5b7a84624010db4d640e0099',
          name: 'Vincent Doyle'
        },
        {
          id: '5b7a8462e720a86db64774e7',
          name: 'Padilla Berger'
        }
      ],
      description: 'Learn about where you can find course descriptions, what information they include,',
    },
  ];
  const pipe = new OrderbyPipe();
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should order courses by date', () => {
    expect(pipe.transform(courses)).toEqual(orderedCourses);
  });
});
