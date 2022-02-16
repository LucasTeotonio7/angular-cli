import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { tap } from 'rxjs/operators'

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
        tap(console.log)
      );
  }

}