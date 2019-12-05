import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, ChangeDetectionStrategy  } from '@angular/core';
import Course from '../../models/Course';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseComponent implements OnChanges {
  @Input() course: Course;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>();
  @Output() edit: EventEmitter<number> = new EventEmitter<number>();

  constructor() {

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }

  deleteCourse(id: number) {
    this.delete.emit(id);
  }

  editCourse(id: number) {
    this.edit.emit(id);
  }
}
