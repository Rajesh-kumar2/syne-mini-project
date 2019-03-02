import { NgModule } from '@angular/core';
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts';

import { RootComponent } from "./app.component";
import { routes } from './app.routes';
import { AuthenticationService, AuthGuard, AlertService, UserService, TokenInterceptor, ErrorInterceptor, 
         EmployeeService, EmpDtaService, ProjectService, ProjDtaService } from './Services';
import { TasksComponent, BugsComponent, AlertComponent, NavigationComponent, RegisterComponent, NewProjComponent,
         NewEmpComponent, ListEmpComponent, GridEmpComponent, ProjectComponent,
         EmployeesComponent, HomeComponent, LoginComponent, NotFoundComponent} from './index';

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule, ChartsModule,
        RouterModule.forRoot(routes)],
    declarations: [RootComponent, HomeComponent, NotFoundComponent, LoginComponent,
                    EmployeesComponent, ProjectComponent,GridEmpComponent, ListEmpComponent, NewEmpComponent,
                    NewProjComponent, RegisterComponent, NavigationComponent, AlertComponent, TasksComponent, BugsComponent],
    providers: [AuthenticationService, AuthGuard, UserService, AlertService, ErrorInterceptor, EmployeeService, EmpDtaService,
                ProjectService, ProjDtaService,
        { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }],
    bootstrap: [RootComponent]
})
export class AppModule { }