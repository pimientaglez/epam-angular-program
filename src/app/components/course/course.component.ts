import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass']
})
export class CourseComponent implements Course {
  public id:number;
  public title:string;
  public creationDate: Date;
  public duration:number;
  public description:string;
  @Input() course: Course;
  constructor() { }

  ngOnInit() {
  }

}
