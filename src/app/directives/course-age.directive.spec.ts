import { CourseAgeDirective } from './course-age.directive';
import { ElementRef } from '@angular/core';
import { inject } from '@angular/core/testing';

describe('CourseAgeDirective', () => {

  it('should create an instance', () => {
    inject([ElementRef], (elementRef: ElementRef) => {
      const directive = new CourseAgeDirective(elementRef);
      expect(directive).toBeTruthy();
    });
  });
});
