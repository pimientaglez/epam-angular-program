import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditComponent } from './edit.component';
import { BreadcrumbComponent } from 'src/app/components/breadcrumb/breadcrumb.component';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from 'src/app/pipes/duration.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { CourseServiceService } from 'src/app/services/course-service.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

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

  const courseTest = {
    date: '11-09-2018',
    description: 'Learn about where you can find course descriptions,',
    length: 200,
    id: 1,
    authors: [
      {
        id: '5b7a846290d6ff6894377fb5',
        name : 'Decker Albert'
      },
      {
        id: '5b7a84624010db4d640e0099',
        name: 'Vincent Doyle'
      },
      {
        id: '5b7a8462e720a86db64774e7',
        name: 'Padilla Berger'
      }
    ],
    name: 'VIDEO COURSE 2. ANGULAR ADVANCED',
    isTopRated: false,
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
        RouterTestingModule,
        HttpClientTestingModule,
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
    const courseSpy = spyOn(courseService, 'getCourseById');

    component.ngOnInit();
    component.course = courseTest;
    fixture.detectChanges();

    expect(courseSpy).toHaveBeenCalled();
    expect(component).toBeTruthy();
  });
});
