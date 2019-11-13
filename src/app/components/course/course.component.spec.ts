import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CourseComponent } from './course.component';
import { By } from '@angular/platform-browser';

describe('CourseComponent', () => {
  let component: CourseComponent;
  let fixture: ComponentFixture<CourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseComponent);
    component = fixture.componentInstance;

    let courseTest = {
      creationDate: new Date('11-09-2018'),
      description: "Learn about where you can find course descriptions,",
      duration: "1h 28min",
      id: 1,
      title: "Video Course 1. Name Tag",
    }
    component.course = courseTest;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render course information', () => {
    const title = fixture.debugElement.query(By.css('h1'));
    //const date = fixture.debugElement.query(By.css('.course-calendar span div'));
    const duration = fixture.debugElement.query(By.css('.course-time span div'));
    const description = fixture.debugElement.query(By.css('p'));

    expect(title.nativeElement.textContent.trim()).toBe("Video Course 1. Name Tag");
    //expect(date.nativeElement.textContent.trim()).toBe("09 Nov, 2018");
    expect(duration.nativeElement.textContent.trim()).toBe("1h 28min");
    expect(description.nativeElement.textContent.trim()).toBe("Learn about where you can find course descriptions,");
  });

  it('should call deleteCourse method',() => {
    const spy = spyOn(component, 'deleteCourse');
    fixture.debugElement.query(By.css('.delete-button')).triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(spy).toHaveBeenCalled();
  })

  it('should emit on click', () => {
    spyOn(component.delete, 'emit');
    fixture.debugElement.query(By.css('.delete-button')).triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.delete.emit).toHaveBeenCalledWith(1);
  });
});
