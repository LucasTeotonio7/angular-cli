import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor() { }

  getCourses(){
    return [
      {id:1, name: 'Angular'},
      {id:2, name: 'C++'},
      {id:3, name: 'Java'},
      {id:4, name: 'PHP'},
      {id:5, name: 'React'}
    ]
  }

  getCourse(id: number){
    let courses = this.getCourses();
    for(let i=0; i<courses.length; i++){
      if(courses[i].id == id){
        return courses[i];
      }
    }
    return null;
  }
}
