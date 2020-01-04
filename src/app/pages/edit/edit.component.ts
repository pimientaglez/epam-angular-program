import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import Course from 'src/app/models/Course';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { Subscription } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';
import { ErrorNotifierService } from 'src/app/services/error-notifier.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit, OnDestroy {
  course: Course = {
    id: 1,
    name: '',
    date: '',
    length: 0,
    isTopRated: true,
    authors: [
      {
        id: '5b7a846290d6ff6894377fb5',
        name : 'Decker Albert'
      },
    ],
    description: '',
  };
  section = '';
  private subscription: Subscription = new Subscription();

  constructor(
    private router: Router,
    private courseService: CourseServiceService,
    private activatedRoute: ActivatedRoute,
    private loadingService: LoadingService,
    private errorNotifierService: ErrorNotifierService, ) {}


  ngOnInit() {
    this.subscription.add(this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      this.subscription.add(this.courseService.getCourseById(Number(id)).subscribe( (res: Course) => {
        this.course = res;
      }, error => { this.shoeErrorMsg(error); }));
      this.section = this.course.name;
    }, error => { this.shoeErrorMsg(error); }));
  }

  saveCourse() {
    this.subscription.add(this.courseService.updateCourse(this.course).subscribe((res: Course) => {
      console.log('Course Updated!', res);
      this.errorNotifierService.setErrorMsg('');
    }, error => { this.shoeErrorMsg(error); }));
    this.router.navigate(['/courses']);
  }
  addAuthor(event?) {
    event.preventDefault();
    this.course.authors.push(event.target.value);
    event.target.value = '';
  }
  removeAuthor(index) {
    this.course.authors.splice(index, 1);
    console.log(this.course.authors);
  }
  backToCourses() {
    this.router.navigate(['/']);
  }
  shoeErrorMsg(e) {
    this.errorNotifierService.setErrorMsg(e);
    this.loadingService.setLoadingStatus(false);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
