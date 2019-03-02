import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ProjDtaService, AlertService, ProjectService } from '../Services';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
    selector: 'add-proj',
    styleUrls: ['./project.component.css'.toString()],
    templateUrl: 'newProj.component.html'
})
export class NewProjComponent implements OnInit {
    newForm: FormGroup;
    submitted = false;
    newProjSubs: Subscription
    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private projService: ProjectService,
                private pData: ProjDtaService,
                private alertService: AlertService) { }

    ngOnInit() { 
        this.newForm = this.formBuilder.group({
            code: [null, Validators.required],
            name: [null, Validators.required],
            group: [null, Validators.required],
            sdate: [null, Validators.required],
            edate: [null, Validators.required]
            
        });
    }
    onSubmit() {
        this.submitted = true;
        if (this.newForm.invalid) {
            return;
        }
        this.newProjSubs = this.projService.addProject(this.newForm.value).pipe(
            first())
            .subscribe(data =>{
                this.alertService.success('Project added successfully', true);
                    this.router.navigate(['/employees']);
            },
            error => {
                this.alertService.error(error);
            });
    }
}