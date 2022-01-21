import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DataFormComponent } from './data-form.component';



@NgModule({
  declarations: [
    DataFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class DataFormModule { }
