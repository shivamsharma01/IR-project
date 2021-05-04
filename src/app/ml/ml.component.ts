import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ml',
    templateUrl: './ml.component.html',
    styleUrls: ['./ml.component.scss']
})

export class MLComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };

    focus;
    focus1;
    constructor() { }

    ngOnInit() {}
}
