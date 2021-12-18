import { Injectable } from "@angular/core";

@Injectable()
export class CoursesService{

    getCourses(){
        return ['Angular', 'C++', 'Java'];
    }
}