import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  getCourses(){
    return ['java', 'angular', 'react', 'vue', 'c++', 'php']
  }

}
