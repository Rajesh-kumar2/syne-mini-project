import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Project } from '../Models/project';
import { Subscription } from 'rxjs';
import { ProjectService, ProjDtaService } from '../Services';

@Component({
    selector: 'project',
    styleUrls: ['./project.component.css'.toString()],
    templateUrl: 'project.component.html'
})
export class ProjectComponent implements OnInit {
    
    hide: boolean = false;
    projects: Project[];
    project: Project = new Project();
    projectSubscription: Subscription
    constructor(private pService: ProjectService, private pDataServ: ProjDtaService) { }

    ngOnInit() { 
       /*  this.projectSubscription = this.pService.getAllProjects().subscribe(data =>
            this.projects = data); */
            this.projects = this.pDataServ.pData;
    }

    new() {
        this.hide = true;
    }

    projDetails(item: Project){
        this.project = item;
    }

    ngAfterViewChecked() {
        this.hide = false;
    } 

}