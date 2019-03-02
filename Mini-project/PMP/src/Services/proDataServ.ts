import { Project } from "../Models/project";
import { FormGroup } from "@angular/forms";

export class ProjDtaService {
    private projData: Array<any>;

    constructor() {
        this.projData = [
            {
                code: 101,
                name: "opics",
                group: "wells",
                sdate: "10/30/2018",
                edate:"11/30/2018"
            },
            {
                code: 102,
                name: "eod",
                group: "wells",
                sdate: "10/30/2018",
                edate:"11/30/2018"
            },
            {
                code: 103,
                name: "floe",
                group: "ingram",
                sdate: "10/30/2018",
                edate:"11/30/2018"
            }
        ]
    }

    get pData(){
        return this.projData;
    }
    set pushData (data: Project){
        this.projData.push(data);
    }
}