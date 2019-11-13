import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseListComponent } from './course-list.component';
import { CourseServiceService } from '../../services/course-service.service';
import { CUSTOM_ELEMENTS_SCHEMA, ɵConsole } from '@angular/core';
import Course from '../../models/Course';
import { CourseComponent } from '../course/course.component';

describe('CourseListComponent', () => {
  let component: CourseListComponent;
  let fixture: ComponentFixture<CourseListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseListComponent ],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseListComponent);
    component = fixture.componentInstance;
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
    const service: CourseServiceService = TestBed.get(CourseServiceService);
    const courseSpy = spyOn(service, 'getCourses');
    component.ngOnInit();    
    fixture.detectChanges();

    expect(courseSpy).toHaveBeenCalled();
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
