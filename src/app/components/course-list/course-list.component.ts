import { Component, OnInit, OnDestroy } from '@angular/core';
import { CourseServiceService } from '../../services/course-service.service';
import Course from '../../models/Course';
import { FilterbytextPipe } from '../../pipes/filterbytext.pipe';
import { SearchtextService } from 'src/app/services/searchtext.service';
import { MatDialog } from '@angular/material';
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';
import { Router } from '@angular/router';
import { filter, take, debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.sass'],
  providers: [ FilterbytextPipe ]
})
export class CourseListComponent implements OnInit, OnDestroy {
  public coursesFromService: Array<Course>;
  public coursesToDisplay: Array<Course> = [];
  public coursesFiltered: Array<Course>;
  private hideLoadMore = false;
  private START_COUNT = '0';
  private subscription: Subscription = new Subscription();

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
    this.subscription.add(this.courseService.getCourses().pipe(take(1)).subscribe(courses => {
      this.coursesFromService = courses;
      this.coursesToDisplay = courses;
      this.loadingService.setLoadingStatus(false);
    }));

    this.subscription.add(this.textService.getSearchText()
    .pipe(
      filter((val) => val.length >= 3),
      debounceTime(700))
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
    }));
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
          this.subscription.add(this.courseService.deleteCourse(id).subscribe( () => {
            setTimeout(() => {
              this.subscription.add(this.courseService.getCourses().subscribe(courses => {
                this.coursesFromService = courses;
                this.coursesToDisplay = courses;
                this.loadingService.setLoadingStatus(false);
              }));
            }, 1500);
          }));
        }
    });
  }

  editCourse(id: number) {
    this.router.navigate(['/courses', id]);
  }

  loadMoreCourses(load: boolean) {
    if (load) {
      const count = this.coursesToDisplay.length + 5;
      this.subscription.add(this.courseService.getCourses(this.START_COUNT, count.toString()).subscribe(courses => {
        this.coursesToDisplay = courses;
        if (this.coursesToDisplay.length < count) {
          this.hideLoadMore = true;
        }
      }));
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
