import { Pipe, PipeTransform } from '@angular/core';
import Course from '../models/Course';

@Pipe({
  name: 'filterbytext'
})
export class FilterbytextPipe implements PipeTransform {
  public filteredArray: Array<any>;
  transform(courses: Course[], searchText: string): Course[] {
    if(!courses){
      return [];
    }
    if(!searchText){
      return courses;
    }
    this.filteredArray = courses.filter((course) => {
      return course.title.toLowerCase().includes(searchText.toLowerCase());
    });
    return this.filteredArray;
  }

}