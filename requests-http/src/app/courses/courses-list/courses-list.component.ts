import { Component, OnInit } from '@angular/core';
import { Course } from '../course.model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  courses!: Course[];

  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
    this.courseService.list().subscribe(
      data => this.courses = data
    );
  }

}
