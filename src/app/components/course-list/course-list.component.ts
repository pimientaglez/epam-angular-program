import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.sass']
})
export class CourseListComponent implements OnInit {
  public id:number;
  public title:string;
  public creationDate: Date;
  public duration:number;
  public description:string;
  public courses:Array<Course> = [
    {
      id: 1,
      title:'Video Course 1. Name Tag',
      creationDate: new Date('11-09-2018'),
      duration: '1h 28min',
      description:
    },
    {},
    {},
    {}
  ]
  constructor() { }

  ngOnInit() {
  }

}
