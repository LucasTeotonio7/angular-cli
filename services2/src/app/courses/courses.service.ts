import { Injectable, EventEmitter } from "@angular/core";

import { LogService } from '../shared/log.service';

@Injectable()
export class CoursesService{

    transmitCourseCreated = new EventEmitter();
    static createdNewCourse = new EventEmitter();

    courses: string[] = ['Angular', 'C++', 'Java'];

    constructor(private logService: LogService){
        console.log('CoursesService');
    }

    getCourses(){
        this.logService.consoleLog('Listagem de cursos');
        return this.courses;
    }

    addCourse(course: string){
        this.logService.consoleLog(`Novo curso foi adicionado: ${course}`)
        this.courses.push(course);
        this.transmitCourseCreated.emit(course);
        CoursesService.createdNewCourse.emit(course);
    }
}