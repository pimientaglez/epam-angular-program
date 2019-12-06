import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCourseComponent } from './add-course.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddCourseComponent', () => {
  let component: AddCourseComponent;
  let fixture: ComponentFixture<AddCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ AddCourseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
