import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { StudentDetailComponent } from "./student-detail/student-detail.component";
import { StudentFormComponent } from "./student-form/student-form.component";
import { StudentComponent } from "./student.component";
import { StudentGuard } from "../guards/student.guard";
import { StudentDeactivateGuard } from "../guards/student-deactivate.guard";
import { StudentDetailResolver } from "./guards/student-detail.resolver";

const studentRoutes = [
    {
        path: '',
        component: StudentComponent,
        canActivateChild: [StudentGuard],
        children: [
            {path: 'create', component: StudentFormComponent},
            {path: ':id', component: StudentDetailComponent,
                resolve: {student: StudentDetailResolver}
            },
            {path: ':id/edit', component: StudentFormComponent,
            canDeactivate: [StudentDeactivateGuard]},
        ],

    }

];

@NgModule({
    imports: [RouterModule.forChild(studentRoutes)],
    exports:[RouterModule]
})
export class StudentRoutingModule {}