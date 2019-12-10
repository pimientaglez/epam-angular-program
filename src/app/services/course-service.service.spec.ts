import { TestBed } from '@angular/core/testing';
import Course from '../models/Course';
import { CourseServiceService } from './course-service.service';
import { Observable } from 'rxjs';

describe('CourseServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CourseServiceService = TestBed.get(CourseServiceService);
    expect(service).toBeTruthy();
  });
  it('should receive courses array', () => {
    const service: CourseServiceService = TestBed.get(CourseServiceService);
    const courseSpy = spyOn(service, 'getCourses');
    expect(courseSpy).toHaveBeenCalled();
  });
});
