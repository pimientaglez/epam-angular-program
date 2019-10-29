import { Component } from '@angular/core';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.sass']
})
export class SearchCourseComponent  {
  public searchText: string = ' '

  findCourseEnter(event?){
    if (event.key === "Enter") {
      console.log('This is the search text from enter key: ',event.target.value);
    }
  }
  findCourseClick(){
    console.log('This is the search text from search button: ',this.searchText)
  }
}
