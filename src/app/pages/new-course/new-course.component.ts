import { Component, ElementRef, Renderer2, ViewChild, OnDestroy } from '@angular/core';
import Course from 'src/app/models/Course';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { Router } from '@angular/router';
import Author from 'src/app/models/Author';
import { LoadingService } from 'src/app/services/loading.service';
import { filter, debounce } from 'rxjs/operators';
import { timer, Subscription } from 'rxjs';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.sass']
})
export class NewCourseComponent implements OnDestroy {
  section = 'New Course';
  authorsFromService: Author[] = [];
  @ViewChild('authorInput', {static: false}) authorInput: ElementRef;

  private newCourse: Course = {
    id: 1,
    name: '',
    date: '',
    length: 0,
    isTopRated: false,
    authors: this.authorsFromService,
    description: '',
  };
  private subscription: Subscription = new Subscription();

  constructor(
    private courseService: CourseServiceService,
    private router: Router,
    private loadingService: LoadingService, ) {}

  createNewCourse() {
    this.loadingService.setLoadingStatus(true);
    this.subscription.add(this.courseService.createCourse(this.newCourse).subscribe((author) => {
      this.loadingService.setLoadingStatus(false);
      this.router.navigate(['/']);
    }));
  }
  searchAuthors(evt) {
    this.subscription.add(this.courseService.getAuthors(evt.target.value)
    .pipe(
      filter((val) => val.length >= 3),
      debounce(() => timer(700)))
      .subscribe((authors: Author[]) => {
        this.authorsFromService = authors;
      }));
    }
    addAuthor(author) {
      const found = this.newCourse.authors.find((item: Author) => {
        return item.id === author.id;
      });
      if (!found) {
        this.newCourse.authors.push(author);
      }
      this.authorsFromService = [];
      this.authorInput.nativeElement.value = '';
    }
    removeAuthor(index) {
      this.newCourse.authors.splice(index, 1);
      console.log(this.newCourse.authors);
    }
    backToCourses() {
      this.router.navigate(['/']);
    }
    ngOnDestroy() {
      this.subscription.unsubscribe();
    }
}
