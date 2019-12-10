import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../../services/course-service.service';
import Course from '../../models/Course';
import { FilterbytextPipe } from '../../pipes/filterbytext.pipe';
import { SearchtextService } from 'src/app/services/searchtext.service';
import { MatDialog } from '@angular/material';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.sass'],
  providers: [ FilterbytextPipe ]
})
export class CourseListComponent implements OnInit {
  public coursesFromService: Array<Course>;
  public coursesToDisplay: Array<Course>;
  public coursesFiltered: Array<Course>;
  private hideLoadMore = false;

  constructor(
    private courseService: CourseServiceService,
    private filterByText: FilterbytextPipe,
    private textService: SearchtextService,
    private router: Router,
    public dialog: MatDialog) {
    console.log('constructor');
  }

  ngOnInit() {
    console.log('ngOnInit');
    this.courseService.getCourses().subscribe(courses => {
      this.coursesFromService = courses;
      this.coursesToDisplay = courses;
    });

    this.textService.getSearchText().subscribe((text) => {
      if (text !== '') {
        this.courseService.filterCoursesByText(text).subscribe( courses => {
          this.coursesFiltered = courses;
          this.coursesToDisplay = this.coursesFiltered;
          this.hideLoadMore = false;
        });
      } else {
        this.coursesToDisplay = this.coursesFromService;
        this.hideLoadMore = false;
      }
    });
  }
  deleteCourse(id: number) {
    this.openConfirmationDialog(id);
  }

  openConfirmationDialog(id: number) {
    /* const courseIndex = this.coursesToDisplay.findIndex( (course) => course.id === id );
    this.dialog.open(DialogConfirmationComponent, { data: { title: this.coursesToDisplay[courseIndex].title } })
      .afterClosed().subscribe(res => {
        if (res) {
          this.courseService.removeItem(id);
          this.coursesFromService = this.courseService.getCourses();
        }
    }); */
  }

  editCourse(id: number) {
    this.router.navigate(['/courses', id]);
  }

  loadMoreCourses(load: boolean){
    if (load) {
      const count = this.coursesToDisplay.length + 5;
      this.courseService.getCourses('0', count.toString()).subscribe(courses => {
        this.coursesToDisplay = courses;
        if (this.coursesToDisplay.length < count) {
          this.hideLoadMore = true;
        }
      });
    }
  }
}
