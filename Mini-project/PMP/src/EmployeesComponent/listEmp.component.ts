import { Component, OnInit, OnDestroy } from '@angular/core';
import { EmployeeService } from '../Services';
import { Employee } from '../Models/employee';
import { Subscription } from 'rxjs';
import { EmpDtaService } from '../Services/empDataServ';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'list-emp',
    styleUrls: ['./employees.component.css'.toString()],
    templateUrl: 'listEmp.component.html'
})
export class ListEmpComponent implements OnInit, OnDestroy {
    employees: Employee[];
    employee: Employee = new Employee();
    employeeSubscription: Subscription
    updateForm: FormGroup
    constructor( private formBuilder: FormBuilder, 
                 private empService: EmployeeService,
                 private edata: EmpDtaService) { }

    ngOnInit() {
        this.updateForm = this.formBuilder.group({
            id: [null, Validators.required],
            firstName: [null, Validators.required],
            lastName: [null, Validators.required],
            designation: [null, Validators.required],
            platform: [null, Validators.required],
            empImg: ['']
        });
        /* this.employeeSubscription = this.empService.getAllEmployees().subscribe(
            data => this.employees = data */
        );
           this.employees = this.edata.eData;
    }
    empDetails(emp:Employee){
        this.employee = Object.assign('', emp);  
    }
    ngOnDestroy(): void {
        /* this.employeeSubscription.unsubscribe(); */
    }
}