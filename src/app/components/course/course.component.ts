import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges  } from '@angular/core';
import Course from '../../models/Course'
import * as moment from 'moment';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass']
})
export class CourseComponent implements OnChanges{
  @Input() course: Course;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>()

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  deleteCourse(id: number){
    this.delete.emit(id);
  }
}
