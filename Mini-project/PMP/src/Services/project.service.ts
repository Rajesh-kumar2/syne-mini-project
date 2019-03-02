import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Project } from "../Models/project";

@Injectable()
export class ProjectService {

    constructor(private http: HttpClient){ }

    getAllProjects (){
        return this.http.get<Project[]>(`${config.apiUrl}/projects`);
    }

    addProject (proj: Project) {
        return this.http.post(`${config.apiUrl}/project/add`, proj);
    }
}