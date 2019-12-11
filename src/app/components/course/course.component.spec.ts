import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseComponent } from './course.component';
import { By } from '@angular/platform-browser';
import { Component, SimpleChange } from '@angular/core';
import Course from '../../models/Course';
import { CourseAgeDirective } from '../../directives/course-age.directive';
import { DurationPipe } from '../../pipes/duration.pipe';

@Component({
  template: '<app-course [course]="course"></app-course>'
})
class TestHostComponent {
  course: Course;
}

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;
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
      declarations: [ CourseComponent, CourseAgeDirective, DurationPipe ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;
    component.course = courseTest;
    component.ngOnChanges({
      course: new SimpleChange(null, component.course, false)
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course information', () => {
    const title = fixture.debugElement.query(By.css('h1'));
    const date = fixture.debugElement.query(By.css('.course-calendar span div'));
    const duration = fixture.debugElement.query(By.css('.course-time span div'));
    const description = fixture.debugElement.query(By.css('p'));

    expect(title.nativeElement.textContent.trim()).toBe('VIDEO COURSE 2. ANGULAR ADVANCED');
    expect(date.nativeElement.textContent.trim()).toBe('09 Nov, 2018');
    expect(duration.nativeElement.textContent.trim()).toBe('3h 20min');
    expect(description.nativeElement.textContent.trim()).toBe('Learn about where you can find course descriptions,');
  });

  it('should call deleteCourse method', () => {
    const spy = spyOn(component, 'deleteCourse');
    fixture.debugElement.query(By.css('.delete-button')).triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  });

  it('should emit on click', () => {
    spyOn(component.delete, 'emit');
    fixture.debugElement.query(By.css('.delete-button')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.delete.emit).toHaveBeenCalledWith(1);
  });
});

describe('Test Course Component with Host Component', () => {
  let fixture;
  let testHost;
  let de;
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

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent, CourseAgeDirective, DurationPipe, TestHostComponent ]
    });
    fixture = TestBed.createComponent(TestHostComponent);
    testHost = fixture.componentInstance;
    de = fixture.debugElement;
    testHost.course = courseTest;
    fixture.detectChanges();
  });
  it('should render course info', () => {
    const title = de.query(By.css('h1'));
    const date = de.query(By.css('.course-calendar span div'));
    const duration = de.query(By.css('.course-time span div'));
    const description = de.query(By.css('p'));

    expect(title.nativeElement.textContent.trim()).toBe('VIDEO COURSE 2. ANGULAR ADVANCED');
    expect(date.nativeElement.textContent.trim()).toBe('09 Nov, 2018');
    expect(duration.nativeElement.textContent.trim()).toBe('3h 20min');
    expect(description.nativeElement.textContent.trim()).toBe('Learn about where you can find course descriptions,');
  });
});

