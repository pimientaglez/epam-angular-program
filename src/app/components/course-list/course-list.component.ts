import { Component, OnInit } from '@angular/core';
import { CourseServiceService } from '../../services/course-service.service';
import Course from '../../models/Course';
import { FilterbytextPipe } from '../../pipes/filterbytext.pipe';
import { SearchtextService } from 'src/app/services/searchtext.service';
import { MatDialog } from '@angular/material';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';
import { Router } from '@angular/router';
import { filter, debounce } from 'rxjs/operators';
import { timer } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.sass'],
  providers: [ FilterbytextPipe ]
})
export class CourseListComponent implements OnInit {
  public coursesFromService: Array<Course>;
  public coursesToDisplay: Array<Course> = [];
  public coursesFiltered: Array<Course>;
  private hideLoadMore = false;

  constructor(
    private courseService: CourseServiceService,
    private filterByText: FilterbytextPipe,
    private textService: SearchtextService,
    private router: Router,
    public dialog: MatDialog,
    private loadingService: LoadingService) {
    console.log('constructor');
  }

  ngOnInit() {
    this.loadingService.setLoadingStatus(true);
    this.courseService.getCourses().subscribe(courses => {
      this.coursesFromService = courses;
      this.coursesToDisplay = courses;
      this.loadingService.setLoadingStatus(false);
    });

    this.textService.getSearchText()
    .pipe(
      filter((val) => val.length >= 3),
      debounce(() => timer(700)))
    .subscribe((text) => {
      if (text !== '') {
        this.loadingService.setLoadingStatus(true);
        this.courseService.filterCoursesByText(text).subscribe( courses => {
          setTimeout(() => {
            this.coursesFiltered = courses;
            this.coursesToDisplay = this.coursesFiltered;
            this.hideLoadMore = false;
            this.loadingService.setLoadingStatus(false);
          }, 1500);
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
    const courseIndex = this.coursesToDisplay.findIndex( (course) => course.id === id );
    this.dialog.open(DialogConfirmationComponent, { data: { title: this.coursesToDisplay[courseIndex].name } })
      .afterClosed().subscribe(res => {
        if (res) {
          this.loadingService.setLoadingStatus(true);
          this.courseService.deleteCourse(id).subscribe( () => {
            setTimeout(() => {
              this.courseService.getCourses().subscribe(courses => {
                this.coursesFromService = courses;
                this.coursesToDisplay = courses;
                this.loadingService.setLoadingStatus(false);
              });
            }, 1500);
          });
        }
    });
  }

  editCourse(id: number) {
    this.router.navigate(['/courses', id]);
  }

  loadMoreCourses(load: boolean) {
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
