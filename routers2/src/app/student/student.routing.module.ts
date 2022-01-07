import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { StudentDetailComponent } from "./student-detail/student-detail.component";
import { StudentFormComponent } from "./student-form/student-form.component";

import { StudentComponent } from "./student.component";

const studentRoutes = [
    {
        path: '',
        component: StudentComponent,
        children: [
            {path: 'create', component: StudentFormComponent},
            {path: ':id', component: StudentDetailComponent},
            {path: ':id/edit', component: StudentFormComponent},
        ]
    }

];

@NgModule({
    imports: [RouterModule.forChild(studentRoutes)],
    exports:[RouterModule]
})
export class StudentRoutingModule {}