import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditComponent } from './edit.component';
import { BreadcrumbComponent } from 'src/app/components/breadcrumb/breadcrumb.component';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from 'src/app/pipes/duration.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
class MockActivatedRoute extends ActivatedRoute {
  constructor() {
      super();
      this.params = of({id: 1});
  }
}
describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  let courseService: CourseServiceService;
  let activatedRoute: ActivatedRoute;

  const courseTest = {
    creationDate: new Date('11-09-2018'),
    description: 'Learn about where you can find course descriptions,',
    duration: 200,
    id: 1,
    authors: ['Juan', 'Ricardo'],
    title: 'VIDEO COURSE 2. ANGULAR ADVANCED',
    topRated: false,
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        EditComponent,
        BreadcrumbComponent,
        DurationPipe
      ],
      imports: [
        FormsModule,
        RouterTestingModule
      ],
      providers: [{
        provide: ActivatedRoute,
        useClass: MockActivatedRoute
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    courseService = TestBed.get(CourseServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    const courseSpy = spyOn(courseService, 'getCourseById')

    component.ngOnInit();
    component.course = courseTest;
    fixture.detectChanges();

    expect(courseSpy).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });
});
