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
  public coursesFromService:Array<Course>; 
  public coursesToDisplay:Array<Course>;
  public coursesFiltered:Array<Course>;

  constructor(
    private courseService: CourseServiceService, 
    private filterByText: FilterbytextPipe,
    private textService: SearchtextService) { 
    console.log('constructor')
  }

  ngOnInit() {
    console.log('ngOnInit')
    this.coursesFromService = this.courseService.getCourses();
    this.coursesToDisplay = this.coursesFromService;
    this.textService.getSearchText().subscribe((text)=>{
      if(text !== ''){
        this.coursesFiltered = this.filterByText.transform(this.coursesFromService, text);
        this.coursesToDisplay = this.coursesFiltered;
      }else{
        this.coursesToDisplay = this.coursesFromService;
      }
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
    this.courseService.removeItem(id);
    this.coursesFromService = this.courseService.getCourses();
  }
}
