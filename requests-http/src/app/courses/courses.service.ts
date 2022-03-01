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
    return this.http.get<Course>(`${this.API}/${id}`).pipe(take(1));
  }

  private create(course: Course){
    return this.http.post(this.API, course).pipe(take(1));
  }

  private update(course: Course){
    return this.http.put(`${this.API}/${course.id}`, course).pipe(take(1));
  }

  save(course: Course){
    if (course.id){
      return this.update(course);
    }
    return this.create(course);
  }

  delete(id: number){
    return this.http.delete(`${this.API}/${id}`).pipe(take(1));
  }

}
