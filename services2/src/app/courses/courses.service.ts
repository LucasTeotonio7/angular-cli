import { Injectable } from "@angular/core";

@Injectable()
export class CoursesService{

    courses: string[] = ['Angular', 'C++', 'Java'];

    constructor(){
        console.log('CoursesService');
    }

    getCourses(){
        return this.courses;
    }

    addCourse(course: string){
        this.courses.push(course);
    }
}