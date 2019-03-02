import { Routes } from "@angular/router";

import { NotFoundComponent } from "./NotFoundComponent/notfound.component";
import { LoginComponent } from "./LoginComponent/login.component";
import { AuthGuard } from "./Services/authguard.service";
import { EmployeesComponent } from "./EmployeesComponent/employees.component";
import { ProjectComponent } from "./ProjectsComponent/project.component";
import { HomeComponent } from "./HomeComponent/home.component";
import { GridEmpComponent } from "./EmployeesComponent/gridEmp.component";
import { ListEmpComponent } from "./EmployeesComponent/listEmp.component";
import { NewEmpComponent } from "./EmployeesComponent/newEmp.component";
import { NewProjComponent } from "./ProjectsComponent/newProj.component";
import { RegisterComponent } from "./RegisterComponent/register.component";
import { TasksComponent } from "./TasksComponent/tasks.component";
import { BugsComponent } from "./BugsComponent/bugs.component";

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'projects', component: ProjectComponent ,
        children: [
            { path: ':id', component: NewProjComponent } 
    ] ,
    canActivate: [AuthGuard]  },
    { path: 'newproject', component: NewProjComponent},
    {
        path: 'employees',
        component: EmployeesComponent, canActivate: [AuthGuard],
        children: [
            { path: '', component: ListEmpComponent }, 
            { path: '1', component: ListEmpComponent },
            { path: '2', component: NewEmpComponent} ,
            { path: '3', component: GridEmpComponent } 
        ]
    },
    { path: 'tasks', component: TasksComponent},
    { path: 'bugs', component: BugsComponent},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NotFoundComponent }
];