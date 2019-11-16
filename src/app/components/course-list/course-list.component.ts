import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../../services/course-service.service';
import Course from '../../models/Course'
import { FilterbytextPipe } from '../../pipes/filterbytext.pipe';
import { SearchtextService } from 'src/app/services/searchtext.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.sass'],
  providers: [ FilterbytextPipe ]
})
export class CourseListComponent implements OnInit {
  public courses:Array<Course> 

  constructor(
    private courseService: CourseServiceService, 
    private filterByText: FilterbytextPipe,
    private textService: SearchtextService) { 
    console.log('constructor')
  }

  ngOnInit() {
    console.log('ngOnInit')
    this.courses= this.courseService.getCourses();
    console.log(this.courses);
    this.textService.getSearchText().subscribe((text)=>{
      console.log('searchText subscribed', text);
      this.courses = this.filterByText.transform(this.courses, text);
    });
  }
  
  ngOnChanges()	{
    console.log('ngOnChanges')
  }

  ngDoCheck() {
    console.log('ngDoCheck')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit')
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit')
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked')
  }

  ngOnDestroy() {
    console.log('ngOnDestroy')
  }

  deleteCourse(id: number){
    console.log('Delete course with ID: ', id)
  }
}
