import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PipesExamplesComponent } from './pipes-examples/pipes-examples.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesExamplesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
