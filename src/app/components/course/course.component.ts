import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges  } from '@angular/core';
import Course from '../../models/Course'
import * as moment from 'moment';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass']
})
export class CourseComponent implements OnChanges{
  formattedDate: string;
  @Input() course: Course;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>()

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
    if(changes['course']){
      console.log('Creation Date', changes['course']['currentValue']['creationDate'])
      this.formattedDate = this.formatDate(changes['course']['currentValue']['creationDate'])
    }
  }

  formatDate(date: Date){
    return moment(date).format('DD MMM, YYYY');
  }
  deleteCourse(id: number){
    this.delete.emit(id);
  }
}
