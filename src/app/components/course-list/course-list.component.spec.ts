import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseListComponent } from './course-list.component';
import { CourseServiceService } from '../../services/course-service.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import Course from '../../models/Course';
import { CourseComponent } from '../course/course.component';
import { SearchtextService } from 'src/app/services/searchtext.service';
import { of, Observable } from 'rxjs';
import {Pipe, PipeTransform} from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialog } from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';

@Pipe({name: 'orderby'})
class MockPipe implements PipeTransform {
    transform(courses: Course[]): Course[] {
      return courses;
    }
}
export class MdDialogMock {
  open() {
    return {
      afterClosed: () => of(1)
    };
  }
}

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let searchTextService: SearchtextService;
  let courseService: CourseServiceService;
  const courseTest = [{
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
  }];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule ],
      declarations: [ CourseListComponent, MockPipe ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        SearchtextService,
        { provide: MatDialog, useClass: MdDialogMock, }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
    searchTextService = TestBed.get(SearchtextService);
    courseService = TestBed.get(CourseServiceService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call ngOnInit and retrieve the courses', () => {
    const courseSpy = spyOn(courseService, 'getCourses').and.returnValue(of(courseTest));
    const searchTextSpy = spyOn(searchTextService, 'getSearchText').and.returnValue(of('Angular'));

    component.ngOnInit();
    fixture.detectChanges();

    expect(courseSpy).toHaveBeenCalled();
    expect(searchTextSpy).toHaveBeenCalled();
  });

  it('should emit delete event', (done) => {
    const course = new CourseComponent();
    course.delete.subscribe(d => {
        expect(d).toEqual(1);
        done();
    });
    course.deleteCourse(1);
  });
});
