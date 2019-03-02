import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeService, AlertService } from '../Services';
import { first } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
    selector: 'add-emp',
    styleUrls: ['./employees.component.css'.toString()],
    templateUrl: 'newEmp.component.html'
})
export class NewEmpComponent implements OnInit {
    newForm: FormGroup;
    submitted = false;
    empImageFile: File;
    newEmpSubs: Subscription
    @ViewChild('empImg') empImage:any;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private empService: EmployeeService,
        private alertService: AlertService)
        { }

    ngOnInit() {
        this.newForm = this.formBuilder.group({
            id: ['', Validators.required],
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            designation: ['', Validators.required],
            platform: ['', Validators.required],
            empImg: ['']
        });
    }

    get f() { return this.newForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.newForm.invalid) {
            return;
        }
        const image = this.empImage.nativeElement;
        if(image.files && image.files[0])
            this.empImageFile = image.files[0];
        
        const imageFile: File = this.empImageFile;

       /*  const ff = this.newForm.value;
        const formData: FormData = new FormData
        formData.append('firstName', ff.firstName )
        formData.append('lastName', ff.lastName )
        formData.append('designation', ff.designation )
        formData.append('platform', ff.platform )
        formData.append('empImg', imageFile, imageFile.name ) */
        this.newEmpSubs = this.empService.addEmployee(this.newForm.value)
           .pipe(first())
            .subscribe(
                data => {
                    this.alertService.success('Employee added successfully', true);
                    this.router.navigate(['/employees']);
                },
                error => {
                    this.alertService.error(error);
                });
    }

    ngOnDestroy(): void {
       /*  this.newEmpSubs.unsubscribe(); */
    }
}