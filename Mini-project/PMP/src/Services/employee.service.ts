import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Employee } from "../Models/employee";
import { Observable } from 'rxjs';

@Injectable()
export class EmployeeService {
    constructor(private http: HttpClient){ }

    addEmployee(emp: Employee) {
        //console.log(emp);
        return this.http.post(`${config.apiUrl}/employees/add`, emp);
    }

    getAllEmployees(){
        return this.http.get<Employee[]>(`${config.apiUrl}/employees`);
    } 

}