import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseComponent } from './new-course.component';
import { BreadcrumbComponent } from 'src/app/components/breadcrumb/breadcrumb.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('NewCourseComponent', () => {
  let component: NewCourseComponent;
  let fixture: ComponentFixture<NewCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ], 
      declarations: [ 
        NewCourseComponent,
        BreadcrumbComponent,
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
