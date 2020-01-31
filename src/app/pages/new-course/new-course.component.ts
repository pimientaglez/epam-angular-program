import { Component, ElementRef, Renderer2, ViewChild, OnDestroy, OnInit } from '@angular/core';
import Course from 'src/app/models/Course';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { Router } from '@angular/router';
import Author from 'src/app/models/Author';
import { LoadingService } from 'src/app/services/loading.service';
import { filter, debounce } from 'rxjs/operators';
import { timer, Subscription } from 'rxjs';
import { ErrorNotifierService } from 'src/app/services/error-notifier.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-new-course',
  templateUrl: './new-course.component.html',
  styleUrls: ['./new-course.component.sass']
})
export class NewCourseComponent implements OnDestroy, OnInit {
  section = 'New Course';
  courseAuthors: Author[] = [];
  authorsFromService: Author[] = [];
  @ViewChild('authorInput', {static: false}) authorInput: ElementRef;

  newCourseForm: FormGroup;
  private subscription: Subscription = new Subscription();

  constructor(
  private courseService: CourseServiceService,
  private router: Router,
  private loadingService: LoadingService,
  private errorNotifierService: ErrorNotifierService,
  private formBuilder: FormBuilder, ) {}

  ngOnInit() {
    this.newCourseForm = this.formBuilder.group({
      id: new FormControl(1, [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      description:  new FormControl('', [Validators.required,  Validators.maxLength(500)]),
      date: new FormControl('', [Validators.required]),
      length: new FormControl('', [Validators.required]),
      authors: new FormControl(this.authorsFromService),
    });
    this.newCourseForm.valueChanges.subscribe((values) => {
      console.log('from new form', values);
    });
  }
  get name() {
    return this.newCourseForm.get('name');
  }
  get description() {
    return this.newCourseForm.get('description');
  }
  get date() {
    return this.newCourseForm.get('date');
  }
  get length() {
    return this.newCourseForm.get('length');
  }
  get authors() {
    return this.newCourseForm.get('authors');
  }
  createNewCourse() {
    this.loadingService.setLoadingStatus(true);
    this.subscription.add(this.courseService.createCourse(this.newCourseForm.value).subscribe((author) => {
      this.loadingService.setLoadingStatus(false);
      this.router.navigate(['/']);
    }, error => { this.shoeErrorMsg(error); }));
  }
  searchAuthors(evt) {
    this.subscription.add(this.courseService.getAuthors(evt.target.value)
    .pipe(
      filter((val) => val.length >= 3),
      debounce(() => timer(700)))
      .subscribe((authors: Author[]) => {
        this.authorsFromService = authors;
      }, error => { this.shoeErrorMsg(error); }));
  }
  addAuthor(author) {
    const found = this.courseAuthors.find((item: Author) => {
      return item.id === author.id;
    });
    if (!found) {
      this.courseAuthors.push(author);
    }
    this.newCourseForm.value.authors = this.courseAuthors;
    this.authorsFromService = [];
    this.authorInput.nativeElement.value = '';
  }
  removeAuthor(index) {
    this.newCourseForm.value.authors.splice(index, 1);
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
