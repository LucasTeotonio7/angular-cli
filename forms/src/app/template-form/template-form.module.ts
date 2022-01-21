import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateFormComponent } from './template-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    TemplateFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule,
  ]
})
export class TemplateFormModule { }
