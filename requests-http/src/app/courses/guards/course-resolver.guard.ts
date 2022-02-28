import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { Observable, of } from 'rxjs';

import { Course } from './../course.model';
import { CoursesService } from '../courses.service';

@Injectable({
  providedIn: 'root',
})
export class CourseResolverGuard implements Resolve<Course> {
  constructor(private courseService: CoursesService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Course> {

    if (route.params && route.params['id']) {
      return this.courseService.loadById(route.params['id']);
    }

    return of({
      id: null as any,
      name: '',
    });
  }
}
