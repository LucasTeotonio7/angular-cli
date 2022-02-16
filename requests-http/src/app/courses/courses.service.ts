import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators'

import { Course } from './course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'http://localhost:3000/courses';

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Course[]>(this.API)
      .pipe(
        tap(console.log)
      );
  }

}
