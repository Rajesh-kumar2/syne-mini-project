import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'selector-name',
    template: `
        <h1 class="text-danger">Component/Route not configured!</h1>
    `
})

export class NotFoundComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}