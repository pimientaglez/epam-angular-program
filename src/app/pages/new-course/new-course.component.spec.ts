import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseComponent } from './new-course.component';
import { BreadcrumbComponent } from 'src/app/components/breadcrumb/breadcrumb.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { PipeTransform, Pipe } from '@angular/core';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MatAutocompleteModule } from '@angular/material';

@Pipe({name: 'duration'})
class MockPipe implements PipeTransform {
    public duration: string;
    transform(minutes: number): string {
      const hours = Math.floor(minutes / 60);
      const h = hours > 0 ? `${hours}h` : '';

      const mins = minutes % 60;
      const m = mins > 0 ? ` ${mins}min ` : '';

      this.duration = h + m;
      return this.duration.trim();
    }
}
describe('NewCourseComponent', () => {
  let component: NewCourseComponent;
  let fixture: ComponentFixture<NewCourseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, FormsModule, HttpClientTestingModule, MatAutocompleteModule, ReactiveFormsModule ],
      declarations: [
        NewCourseComponent,
        BreadcrumbComponent,
        MockPipe
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
