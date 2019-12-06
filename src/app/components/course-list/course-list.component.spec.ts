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
};

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let searchTextService: SearchtextService;
  let courseService: CourseServiceService;
  let dialog: MdDialogMock;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ CourseListComponent, MockPipe ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        SearchtextService,
        {provide: MatDialog, useClass: MdDialogMock,}
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
    const courseSpy = spyOn(courseService, 'getCourses');
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
