import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import Course from 'src/app/models/Course';
import { CourseServiceService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit {
  course: Course;
  section: string = '';
  constructor(
    private auth: AuthService,
    private router: Router,
    private courseService: CourseServiceService,
    private activatedRoute: ActivatedRoute,) {
   }


  ngOnInit() {
    if(!this.auth.isAuthenticated()){
      this.router.navigate(['/login'])
    }else{
      this.activatedRoute.params.subscribe(params => {
        let id = params['id'];
        this.course = this.courseService.getCourseById(Number(id));
        this.section = this.course.title;
    });
    }
  }
  saveCourse(){
    this.courseService.updateCourse(this.course);
    this.router.navigate(['/courses'])
  }
  addAuthor(event?){
    event.preventDefault();
    this.course.authors.push(event.target.value)
    event.target.value = ''
  }
  removeAuthor(index){
    console.log(index);
    this.course.authors.splice(index,1);
    console.log(this.course.authors);
    
  }
  backToCourses(){
    this.router.navigate(['/courses'])
  }
}
