import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseListComponent } from './course-list.component';
import { CourseServiceService } from '../../services/course-service.service';
import { CUSTOM_ELEMENTS_SCHEMA, ɵConsole } from '@angular/core';
import Course from '../../models/Course';
import { CourseComponent } from '../course/course.component';
import { SearchtextService } from 'src/app/services/searchtext.service';
import { of } from 'rxjs';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;
  let searchTextService: SearchtextService;
  let courseService: CourseServiceService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent, MockPipe ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
      providers: [SearchtextService]
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

  it('should call console.log method',() => {
    const consoleSpy = spyOn(console, 'log');
    component.deleteCourse(1);    
    fixture.detectChanges();

    expect(consoleSpy).toHaveBeenCalled();
  });

  it('should call ngOnInit and retrieve the courses',() => {    
    const courseSpy = spyOn(courseService, 'getCourses');
    const searchTextSpy = spyOn(searchTextService, 'getSearchText').and.returnValue(of('Angular'));

    component.ngOnInit();    
    fixture.detectChanges();
    
    expect(courseSpy).toHaveBeenCalled();
    expect(searchTextSpy).toHaveBeenCalled();
  });

  it('should emit delete event', (done) => {
    let course = new CourseComponent();
    course.delete.subscribe(d => {
        expect(d).toEqual(1);
        done();
    });
    course.deleteCourse(1);
  });
});

import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'orderby'})
class MockPipe implements PipeTransform {
    transform(courses: Course[]): Course[] {
      return courses;
    }
}
