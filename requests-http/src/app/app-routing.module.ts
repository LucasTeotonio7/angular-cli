import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'reactive-search' },
  {
    path: 'courses',
    loadChildren: () =>
      import('./courses/courses.module').then((m) => m.CoursesModule),
  },
  {
    path: 'upload',
    loadChildren: () =>
      import('./upload-file/upload-file.module').then((m) => m.UploadFileModule),
  },
  {
    path: 'reactive-search',
    loadChildren: () =>
      import('./reactive-search/reactive-search.module').then((m) => m.ReactiveSearchModule),
  },
  {
    path: 'rxjs-poc',
    loadChildren: () =>
      import('././unsubscribe-rxjs/unsubscribe-rxjs.module').then(
        (m) => m.UnsubscribeRxjsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
