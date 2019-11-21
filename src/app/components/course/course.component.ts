import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges  } from '@angular/core';
import Course from '../../models/Course'
import * as moment from 'moment';
import {MatDialog, MatDialogConfig} from "@angular/material";
import { DialogConfirmationComponent } from '../dialog-confirmation/dialog-confirmation.component';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.sass']
})
export class CourseComponent implements OnChanges{
  @Input() course: Course;
  @Output() delete: EventEmitter<number> = new EventEmitter<number>()

  constructor(public dialog: MatDialog){

  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  deleteCourse(id: number){
    this.delete.emit(id);
  }

  openConfirmationDialog(id: number){
    this.dialog.open(DialogConfirmationComponent, { data: { title: this.course.title} })
      .afterClosed().subscribe(res =>{
        if(res){
          this.deleteCourse(id);
        }
    });   
  }
}
