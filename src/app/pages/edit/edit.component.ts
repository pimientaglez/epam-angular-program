import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import Course from 'src/app/models/Course';
import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {
  course: Course;
  section = '';
  constructor(
    private router: Router,
    private courseService: CourseServiceService,
    private activatedRoute: ActivatedRoute, ) {}


  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      this.course = this.courseService.getCourseById(Number(id));
      this.section = this.course.name;
    });
  }

  saveCourse() {
    this.courseService.updateCourse(this.course);
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
    this.router.navigate(['/courses']);
  }
}
