import { TestBed } from '@angular/core/testing';
import Course from '../models/Course'
import { CourseServiceService } from './course-service.service';

describe('CourseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseServiceService = TestBed.get(CourseServiceService);
    expect(service).toBeTruthy();
  });
  it('should be created', () => {
    const service: CourseServiceService = TestBed.get(CourseServiceService);
    let courses: Array<Course> = service.getCourses();
    expect(courses.length).toBeGreaterThan(1);
  });
});
