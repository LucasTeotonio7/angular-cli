import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  portalUrl: string;
  portalName: string;
  courses: string[];


  constructor(private coursesService: CourseService) {
    this.portalUrl = 'https://digitalinnovation.one/'
    this.portalName = 'digital innovation'

    this.courses = this.coursesService.getCourses()

  }

  ngOnInit(): void {
  }

}
