import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';



@NgModule({
  declarations: [
    FormDebugComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FormDebugComponent,
  ]
})
export class SharedModule { }
