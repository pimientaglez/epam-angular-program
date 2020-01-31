import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import Course from 'src/app/models/Course';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { Subscription, timer } from 'rxjs';
import { LoadingService } from 'src/app/services/loading.service';
import { ErrorNotifierService } from 'src/app/services/error-notifier.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { dateValidator } from 'src/app/utils/validators/date';
import Author from 'src/app/models/Author';
import { debounce, filter } from 'rxjs/operators';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit, OnDestroy {
  authorsFromService: Author[] = [];
  @ViewChild('authorInput', {static: false}) authorInput: ElementRef;
  course: Course = {
    id: 1,
    name: '',
    date: '',
    length: 0,
    isTopRated: true,
    authors: this.authorsFromService,
    description: '',
  };
  section = '';
  private subscription: Subscription = new Subscription();
  editForm: FormGroup;

  constructor(
    private router: Router,
    private courseService: CourseServiceService,
    private activatedRoute: ActivatedRoute,
    private loadingService: LoadingService,
    private errorNotifierService: ErrorNotifierService,
    private formBuilder: FormBuilder, ) {}


  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: new FormControl(this.course.id, [Validators.required]),
      name: new FormControl(this.course.name, [Validators.required]),
      description:  new FormControl(this.course.description, [Validators.required]),
      date: new FormControl(this.course.date, [Validators.required]),
      length: new FormControl(this.course.length, [Validators.required]),
      authors: new FormControl(this.course.authors),
    });
    this.editForm.valueChanges.subscribe((values) => {
      console.log('from edit form', values);
    });

    this.subscription.add(this.activatedRoute.params.subscribe(params => {
      const id = params.id;
      this.subscription.add(this.courseService.getCourseById(Number(id)).subscribe( (res: Course) => {
        this.course = res;
        this.section = this.course.name;
        this.editForm.patchValue({
          id: this.course.id,
          name: this.course.name,
          description:  this.course.description,
          date: this.course.date,
          length: this.course.length,
          authors: this.course.authors,
        })
      }, error => { this.shoeErrorMsg(error); }));
    }, error => { this.shoeErrorMsg(error); }));
  }
  get name() {
    return this.editForm.get('name');
  }
  get description() {
    return this.editForm.get('description');
  }
  get date() {
    return this.editForm.get('date');
  }
  get length() {
    return this.editForm.get('length');
  }
  saveCourse() {
    this.subscription.add(this.courseService.updateCourse(this.editForm.value).subscribe((res: Course) => {
      console.log('Course Updated!', res);
      this.errorNotifierService.setErrorMsg('');
    }, error => { this.shoeErrorMsg(error); }));
    this.router.navigate(['/courses']);
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
    const found = this.course.authors.find((item: Author) => {
      return item.id === author.id;
    });
    if (!found) {
      this.course.authors.push(author);
    }
    this.editForm.value.authors = this.course.authors;
    this.authorsFromService = [];
    this.authorInput.nativeElement.value = '';
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
