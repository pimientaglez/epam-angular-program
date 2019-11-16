import { Pipe, PipeTransform } from '@angular/core';
import Course from '../models/Course';

@Pipe({
  name: 'filterbytext'
})
export class FilterbytextPipe implements PipeTransform {

  transform(courses: Course[], searchText: string): Course[] {
    if(!courses){
      return [];
    }
    if(!searchText){
      return courses;
    }
    return courses.filter((course) => {
      return course.title.includes(searchText);
    });
  }

}
