import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { DropdownService } from './services/dropdown.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    FormDebugComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    FormDebugComponent,
  ],
  providers: [
    DropdownService
  ]
})
export class SharedModule { }
