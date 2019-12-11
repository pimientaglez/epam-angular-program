import { TestBed } from '@angular/core/testing';
import Course from '../models/Course';
import { CourseServiceService } from './course-service.service';
import { Observable } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('CourseServiceService', () => {
  let originalTimeout;
  const courseTest = [{
    date: '11-09-2018',
    description: 'Learn about where you can find course descriptions,',
    length: 200,
    id: 1,
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
    name: 'VIDEO COURSE 2. ANGULAR ADVANCED',
    isTopRated: false,
  }];
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule,
    ],
  })
  );
  beforeEach(() => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
  });

  afterEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
  });
  it('should be created', () => {
    const service: CourseServiceService = TestBed.get(CourseServiceService);
    expect(service).toBeTruthy();
  });
  it('should receive courses array', (done: DoneFn) => {
      const service: CourseServiceService = TestBed.get(CourseServiceService);
      service.getCourses('0', '1').subscribe(value => {
        expect(value).toBe(courseTest);
        done();
      });
  });
});
