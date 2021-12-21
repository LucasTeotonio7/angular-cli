import { Component, OnInit } from '@angular/core';

import { CoursesService } from '../courses/courses.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss'],
  //FIXME: using the service only in one component
  providers: [CoursesService]
})
export class CreateCourseComponent implements OnInit {

  courses: string [] = []

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.courses = this.coursesService.getCourses();
  }

  onAddCourse(course: string){
    this.coursesService.addCourse(course);
  }

}
