import { Pipe, PipeTransform } from '@angular/core';
import Course from '../models/Course';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {
  transform(courses: Course[]): Course[] {

    const sortedCourses = courses.sort((a: Course, b: Course) => {
      const date1 = new Date(a.date);
      const date2 = new Date(b.date);

      if (date1 < date2) {
          return 1;
      } else if (date1 > date2) {
          return -1;
      } else {
          return 0;
      }
    });
    return sortedCourses;
  }

}
