import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { map, switchMap } from 'rxjs/operators';

import { AlertModalService } from './../../shared/alert-modal.service';
import { CoursesService } from '../courses.service';
import { Courses2Service } from '../courses2.service';
import { Course } from '../course.model';

@Component({
  selector: 'app-courses-form',
  templateUrl: './courses-form.component.html',
  styleUrls: ['./courses-form.component.scss']
})
export class CoursesFormComponent implements OnInit {

  form!: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private courseService: Courses2Service,
    private alertService: AlertModalService,
    private location: Location,
    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {

    // this.route.params.subscribe(
    //   (params: any) => {
    //     const id = params['id'];
    //     console.log(id);
    //     const course$ = this.courseService.loadById(id);
    //     course$.subscribe((course: any) =>{
    //       this.updateForm(course)
    //       console.log(course);
    //     })
    //   }
    // )

    // this.route.params
    // .pipe(
    //   map((params: any)=> params['id']),
    //   switchMap(id => this.courseService.loadById(id))
    //   // switchMap (course => getLessons)
    // )
    // .subscribe(
    //   (course: any) => {
    //       this.updateForm(course);
    //       console.log(course);
    //   }
    // )

    // concatMap -> Ordem da requisição importa.
    // mergeMap -> Ordem não importa.
    // exhaustMap -> Caso de login (aguarda a resposta ...)

    const course = this.route.snapshot.data['course'];

    this.form = this.fb.group({
      id: [course.id],
      name: [course.name,
        [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(250)
      ]]
    });
  }

  // updateForm(course: Course){
  //   this.form.patchValue({
  //     id: course.id,
  //     name: course.name
  //   })
  // }

  hasError(field: string){
    return this.form.get(field)?.errors;
  }

  hasErrorMessage(field: string){

    let fieldErrors = this.form.get(field)?.errors;

    if (fieldErrors?.required){
      return 'Informe o nome do Curso!'
    }

    if (fieldErrors?.minlength){
      return `O campo deve ter no mínimo ${fieldErrors['minlength'].requiredLength} caracteres!`
    }

    if (fieldErrors?.maxlength){
      return `O campo deve ter no máximo ${fieldErrors['maxlength'].requiredLength} caracteres!`
    }
    else{
      return ''
    }
  }

  onSubmit(){
    this.submitted = true;
    console.log(this.form.value)
    if(this.form.valid){

      this.courseService.save(this.form.value).subscribe(
        success => {
          this.alertService.showAlertSuccess('Curso salvo com sucesso!');
          this.location.back();
        },
        error => {
          this.alertService.showAlertDanger('Erro ao salvar curso!')
        },
      )


      // if(this.form.value.id){
      //   this.courseService.update(this.form.value).subscribe(
      //     success => {
      //       this.alertService.showAlertSuccess('Curso atualizado com sucesso!');
      //       this.location.back();
      //     },
      //     error=> this.alertService.showAlertDanger('Erro ao atualizar curso!'),
      //     () => console.log('update OK')
      //   )
      // } else {
      //   console.log('submit');
      //   this.courseService.create(this.form.value).subscribe(
      //   success => {
      //     this.alertService.showAlertSuccess('Curso salvo com sucesso!');
      //     this.location.back();
      //   },
      //   error=> this.alertService.showAlertDanger('Erro ao criar curso!'),
      //   () => console.log('request OK')
      //   )
      // }

    }
  }

  onCancel(){
    this.submitted = false;
    this.form.reset;
    this.location.back();
  }

}
