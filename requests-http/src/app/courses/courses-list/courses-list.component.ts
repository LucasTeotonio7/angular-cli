import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

import { EMPTY, Observable, Subject } from 'rxjs';
import { catchError, take, switchMap } from 'rxjs/operators';

import { Course } from '../course.model';
import { CoursesService } from '../courses.service';
import { AlertModalService } from './../../shared/alert-modal.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit {

  // courses!: Course[];

  courses$: Observable<Course[]> = EMPTY;
  error$ = new Subject<boolean>();

  // modalRef?: BsModalRef;

  deleteModalRef?: BsModalRef;
  @ViewChild('deleteModal') deleteModal: any;

  selectedCourse!: number;

  constructor(
    private courseService: CoursesService,
    private modalService: BsModalService,
    private alertService: AlertModalService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // this.courseService.list().subscribe(
    //   data => this.courses = data
    // );
    this.onRefresh();



  }

  onEdit(id: number){
    this.router.navigate(['update', id], { relativeTo: this.route });
  }

  onDelete(id: number){
    this.selectedCourse = id;
    // this.deleteModalRef = this.modalService.show(
    //   this.deleteModal, {class: 'modal-sm'});
    const $result = this.alertService.showConfirm('Confirmação', "Tem certeza que deseja remover esse curso?")
    $result.asObservable()
    .pipe(
      take(1),
      switchMap(result => result ? this.courseService.delete(id): EMPTY)
    )
    .subscribe(
      success => {
        this.onRefresh();
      },
      error => {this.alertService.showAlertDanger(
        "Ocorreu um erro ao deletar o curso!")
      },
    )
  }

  onConfirmDelete(): void {
    this.courseService.delete(this.selectedCourse).subscribe(
      success => {
        this.deleteModalRef?.hide();
        this.onRefresh();
      },
      error => {this.alertService.showAlertDanger(
        "Ocorreu um erro ao deletar o curso!")
        this.deleteModalRef?.hide();
      },
    );

  }

  onDeclineDelete(): void {
    this.deleteModalRef?.hide();
  }

  onRefresh(){
    this.courses$ = this.courseService.list()
      .pipe(
        catchError(error => {
          console.error(error);
          // this.error$.next(true);
          this.handleError()
          return EMPTY
        })
      );


      // this.courseService.list().subscribe(
      //   data=>{
      //     console.log(data)
      //   },
      //   error=>{
      //     console.error(error)
      //   },
      //   ()=>{
      //     console.log('Observable Complete!')
      //   }
      // );
  }

  handleError(){
    this.alertService.showAlertDanger('Ocorreu um erro ao carregar a lista de Cursos, tente novamente mais tarde!');
    // this.modalRef = this.modalService.show(AlertModalComponent);
    // this.modalRef.content.type = 'danger'
    // this.modalRef.content.message = 'Ocorreu um erro ao carregar a lista de Cursos, tente novamente mais tarde!'
  }

}
