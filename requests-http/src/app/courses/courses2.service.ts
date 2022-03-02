import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';
import { Course } from './course.model';
import { CrudService } from './../shared/crud-service';

@Injectable({
  providedIn: 'root'
})
export class Courses2Service extends CrudService<Course> {

  constructor(protected http: HttpClient) {
    super(http, `${environment.API}courses`);
  }
}
