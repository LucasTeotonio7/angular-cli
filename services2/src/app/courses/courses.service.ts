import { Injectable, EventEmitter } from "@angular/core";

@Injectable()
export class CoursesService{

    transmitCourseCreated = new EventEmitter();
    static createdNewCourse = new EventEmitter();

    courses: string[] = ['Angular', 'C++', 'Java'];

    constructor(){
        console.log('CoursesService');
    }

    getCourses(){
        return this.courses;
    }

    addCourse(course: string){
        this.courses.push(course);
        this.transmitCourseCreated.emit(course);
        CoursesService.createdNewCourse.emit(course);
    }
}