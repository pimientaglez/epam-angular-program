import { Component } from '@angular/core';
import { SearchtextService } from 'src/app/services/searchtext.service';

@Component({
  selector: 'app-search-course',
  templateUrl: './search-course.component.html',
  styleUrls: ['./search-course.component.sass']
})
export class SearchCourseComponent  {
  public searchText: string;
  constructor(private textService: SearchtextService){

  }
  findCourseEnter(event?){
    this.textService.setSearchText(event.target.value);
    console.log('This is the search text from enter key: ',event.target.value);
  }
  findCourseClick(){
    console.log('This is the search text from search button: ',this.searchText)
  }
}
