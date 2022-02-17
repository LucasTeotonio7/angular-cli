import { Component, OnInit } from '@angular/core';

import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Course } from '../course.model';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  // courses!: Course[];

  courses$: Observable<Course[]> = EMPTY;
  error$ = new Subject<boolean>();

  constructor(private courseService: CoursesService) { }

  ngOnInit(): void {
    // this.courseService.list().subscribe(
    //   data => this.courses = data
    // );
    this.onRefresh();



  }

  onRefresh(){
    this.courses$ = this.courseService.list()
      .pipe(
        catchError(error => {
          console.error(error);
          this.error$.next(true);
          return EMPTY
        })
      );


      this.courseService.list().subscribe(
        data=>{
          console.log(data)
        },
        error=>{
          console.error(error)
        },
        ()=>{
          console.log('Observable Complete!')
        }
      );
  }

}
