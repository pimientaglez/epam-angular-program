import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditComponent } from './edit.component';
import { BreadcrumbComponent } from 'src/app/components/breadcrumb/breadcrumb.component';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from 'src/app/pipes/duration.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditComponent', () => {
  let component: EditComponent;
  let fixture: ComponentFixture<EditComponent>;
  const courseTest = {
    creationDate: new Date('11-09-2018'),
    description: 'Learn about where you can find course descriptions,',
    duration: 200,
    id: 1,
    authors: ['Juan', 'Ricardo'],
    title: 'VIDEO COURSE 2. ANGULAR ADVANCED',
    topRated: false,
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
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditComponent);
    component = fixture.componentInstance;
    component.course = courseTest;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
