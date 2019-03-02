import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    public pieChartLabels:string[] = ['Tasks', 'Critical bugs', 'Major bugs', 'Minor bugs'];
    public pieChartData:number[] = [50, 10, 20, 30];
    public pieChartType:string = 'pie';

    constructor() { }

    ngOnInit() { }

    public chartClicked(e:any):void {
        console.log(e);
      }
     
    public chartHovered(e:any):void {
        console.log(e);
    }
}