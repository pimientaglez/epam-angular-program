import { Directive, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[courseAge]'
})
export class CourseAgeDirective implements OnInit {
  @Input('courseAge') creationDate: string;
  public currentDate: Date;
  public DiffInDays: number;
  constructor(private el: ElementRef) { }

  ngOnInit() {
    const creation = new Date(this.creationDate);
    this.currentDate = this.getCurrentDate();
    this.DiffInDays = this.getDiffInDays( creation, this.currentDate );
    this.defineAgeCourse(this.DiffInDays);
  }
  getCurrentDate() {
    return new Date();
  }
  getDiffInDays(creation, current) {
    return Math.floor((
      Date.UTC( current.getFullYear(),
      current.getMonth() ,
      current.getDate() ) -
      Date.UTC( creation.getFullYear(),
      creation.getMonth() , creation.getDate() ) ) / ( 1000 * 60 * 60 * 24 ));
  }

  defineAgeCourse(days) {
    if (days >= 0 && days <= 14) { // fresh course(no more than 14 days old)
      this.el.nativeElement.style.border = '2px solid forestgreen';
    } else if (days < 0) { // upcoming course
      this.el.nativeElement.style.border = '2px solid cornflowerblue';
    }
  }
}
