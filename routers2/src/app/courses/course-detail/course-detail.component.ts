import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { CoursesService } from '../courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  id: any = '';
  subscription!: Subscription;
  course: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService) {
    // this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params: any) =>{
        this.id = params['id']
      }
    );

    this.course = this.coursesService.getCourse(this.id)

    if(this.course == null){
      this.router.navigate(['courses/not-found'])
    }
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
