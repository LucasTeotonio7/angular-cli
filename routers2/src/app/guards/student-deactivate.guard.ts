import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentFormComponent } from '../student/student-form/student-form.component';

@Injectable({
  providedIn: 'root'
})
export class StudentDeactivateGuard implements CanDeactivate<StudentFormComponent> {

  canDeactivate(
    component: StudentFormComponent,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot): Observable<boolean> | boolean  {

    console.log("guarda de desativação!");

    return component.canChangeRoute();
  }

}
