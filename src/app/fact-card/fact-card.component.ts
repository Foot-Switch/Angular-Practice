import { Component, Input, OnInit } from '@angular/core';
import { FactCard } from './model/fact-card.model';

@Component({
    selector: 'app-fact-card',
    templateUrl: './fact-card.component.html',
    styleUrls: ['./fact-card.component.scss']
})

export class FactCardComponent implements OnInit {

    @Input() factCard: FactCard

    constructor() { }

    ngOnInit() {
    }

    formatFactCount(){
      if (this.factCard.numFacts == 1) return "Fact"
      else return "Facts"
    }
}