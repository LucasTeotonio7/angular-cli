import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit, OnDestroy {

  student: any;
  subscription!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private studentService: StudentService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        let id = params['id'];

        this.student = this.studentService.getStudent(id);

      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  update(){
    this.router.navigate(['/student', this.student.id, 'edit']);
  }

}
