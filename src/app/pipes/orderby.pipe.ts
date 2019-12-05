import { Pipe, PipeTransform } from '@angular/core';
import Course from '../models/Course';

@Pipe({
  name: 'orderby'
})
export class OrderbyPipe implements PipeTransform {
  transform(courses: Course[]): Course[] {

    const sortedCourses = courses.sort((a: any, b: any) => {
      const date1 = new Date(a.creationDate);
      const date2 = new Date(b.creationDate);

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
