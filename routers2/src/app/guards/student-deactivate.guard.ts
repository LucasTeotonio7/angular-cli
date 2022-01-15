import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StudentFormComponent } from '../student/student-form/student-form.component';
import { IFormCanDeactivate } from './iform-candeactivate';

@Injectable({
  providedIn: 'root'
})
export class StudentDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {

  canDeactivate(
    component: IFormCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot): Observable<boolean> | boolean  {

    console.log("guarda de desativação!");

    // return component.canChangeRoute();

    return component.canDisable();
  }

}
