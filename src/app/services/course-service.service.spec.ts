import { TestBed } from '@angular/core/testing';
import Course from '../models/Course';
import { CourseServiceService } from './course-service.service';

describe('CourseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseServiceService = TestBed.get(CourseServiceService);
    expect(service).toBeTruthy();
  });
  it('should receive courses array', () => {
    const service: CourseServiceService = TestBed.get(CourseServiceService);
    const courses: Array<Course> = service.getCourses();
    expect(courses.length).toBeGreaterThan(1);
  });
});
