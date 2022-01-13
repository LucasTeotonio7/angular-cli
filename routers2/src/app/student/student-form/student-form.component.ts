import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  student: any;
  subscription!: Subscription;
  private changedForm:boolean = false;

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

        if (this.student === null){
          this.student = {}
        }

      }
    );
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  cancel(){
    this.router.navigate(['/student']);
  }

  canChangeRoute(){
    if(this.changedForm){
      return confirm("Tem certeza que deseja sair?")
    } else{
      return true;
    }
  }

  onInput(){
    this.changedForm = true;
  }

}
