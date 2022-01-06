import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: any[] = [
    {id: 1, name: 'lucas', email: 'lucasteo@gmail.com'},
    {id: 2, name: 'mateus', email: 'mateus7@bol.com'},
    {id: 3, name: 'kamila', email: 'kamila08@gmail.com'}
  ]

  constructor() { }

  getStudents(){
    return this.students;
  }

  getStudent(id: number){
    let students = this.getStudents();
    for(let i=0; i<students.length; i++){
      if(students[i].id == id){
        return students[i];
      }
    }
    return null;
  }

}
