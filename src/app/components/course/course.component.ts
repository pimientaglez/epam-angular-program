import { Component, Input, Output, EventEmitter  } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass']
})
export class CourseComponent implements Course {
  public id:number;
  public title:string;
  public creationDate: Date;
  public duration:string;
  public description:string;
  formattedDate: string;
  @Input() course: Course;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>()

  ngOnInit() {
    this.formattedDate = moment(this.course.creationDate).format('DD MMM, YYYY')
  }

  deleteCourse(id: number){
    this.delete.emit(id);
  }
}
