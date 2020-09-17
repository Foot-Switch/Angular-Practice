import { Component, OnInit } from '@angular/core';
import { FactCard } from './model/fact-card.model';

import { factCard } from "./model/fact-card"

@Component({
    selector: 'app-fact-card',
    templateUrl: './fact-card.component.html',
    styleUrls: ['./fact-card.component.css']
})

export class FactCardComponent implements OnInit {

    factCard = factCard

    constructor() { }

    ngOnInit() {
    }
}