import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'courses' },
  { path: 'courses', loadChildren: () => import('./courses/courses.module').then(m => m.CoursesModule)},
  {
    path: 'rxjs-poc',
    loadChildren: () => import('././unsubscribe-rxjs/unsubscribe-rxjs.module').then(m => m.UnsubscribeRxjsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
