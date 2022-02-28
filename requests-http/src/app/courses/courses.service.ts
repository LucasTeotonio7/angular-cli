import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, delay, take } from 'rxjs/operators';

import { Course } from './course.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = `${environment.API}courses`;

  constructor(private http: HttpClient) { }

  list(){
    return this.http.get<Course[]>(this.API)
      .pipe(
        delay(500),
        tap(console.log)
      );
  }

  loadById(id: number){
    return this.http.get(`${this.API}/${id}`).pipe(take(1))
  }

  create(course: Course){
    return this.http.post(this.API, course).pipe(take(1));
  }

}
