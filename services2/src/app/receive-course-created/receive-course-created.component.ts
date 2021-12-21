import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../courses/courses.service';

@Component({
  selector: 'app-receive-course-created',
  templateUrl: './receive-course-created.component.html',
  styleUrls: ['./receive-course-created.component.scss']
})
export class ReceiveCourseCreatedComponent implements OnInit {

  course: string = '';

  constructor(private _coursesService: CoursesService) { }

  ngOnInit(): void {
    this._coursesService.transmitCourseCreated.subscribe(
      courseCreated=> this.course = courseCreated
    );
  }

}
