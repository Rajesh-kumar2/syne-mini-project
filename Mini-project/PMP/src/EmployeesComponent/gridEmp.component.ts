import { Component, OnInit } from '@angular/core';
import { Employee } from '../Models/employee';
import { Subscription } from 'rxjs';
import { EmployeeService, EmpDtaService } from '../Services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'grid-emp',
    styleUrls: ['./employees.component.css'.toString()],
    templateUrl: 'gridEmp.component.html'
})
export class GridEmpComponent implements OnInit {
    employees: Employee[];
    employee: Employee = new Employee();
    updateForm: FormGroup
    employeeSubscription: Subscription

    constructor(private empService: EmployeeService, 
                private edata: EmpDtaService,
                private formBuilder: FormBuilder) { }

    ngOnInit() {
            this.updateForm = this.formBuilder.group({
            firstName: [null, Validators.required],
            lastName: [null, Validators.required],
            designation: [null, Validators.required],
            platform: [null, Validators.required],
            empImg: ['']
        });
        /* this.employeeSubscription = this.empService.getAllEmployees().subscribe(
            data => this.employees = data
        ); */
           this.employees = this.edata.eData;
    }
    empDetails(emp:Employee){
        this.employee = Object.assign('', emp);  
    }
    ngOnDestroy(): void {
        /* this.employeeSubscription.unsubscribe(); */
    }
}