import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TemplateFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class TemplateFormModule { }
