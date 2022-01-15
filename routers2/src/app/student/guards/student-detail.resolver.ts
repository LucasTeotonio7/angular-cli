import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

import { Student } from '../student';
import { StudentService } from '../student.service';

@Injectable({
  providedIn: 'root'
})
export class StudentDetailResolver implements Resolve<Student> {

  constructor(private studentService: StudentService){

  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {

    let id = route.params['id'];

    return this.studentService.getStudent(id);
  }
}
