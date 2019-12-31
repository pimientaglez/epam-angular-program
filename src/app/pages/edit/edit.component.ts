import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import Course from 'src/app/models/Course';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { Subscription } from 'rxjs';

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
    private activatedRoute: ActivatedRoute, ) {}


  ngOnInit() {
    this.subscription.add(this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      this.subscription.add(this.courseService.getCourseById(Number(id)).subscribe( (res: Course) => {
        this.course = res;
      }));
      this.section = this.course.name;
    }));
  }

  saveCourse() {
    this.subscription.add(this.courseService.updateCourse(this.course).subscribe((res: Course) => {
      console.log('Course Updated!', res);
    }));
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
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
