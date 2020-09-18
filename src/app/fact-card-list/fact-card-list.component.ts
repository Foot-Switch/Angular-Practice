import { Component, OnInit } from '@angular/core';
import { factCards } from '../fact-card/model/fact-cards'

@Component({
  selector: 'app-fact-card-list',
  templateUrl: './fact-card-list.component.html',
  styleUrls: ['./fact-card-list.component.css']
})
export class FactCardListComponent implements OnInit {

  factCards = factCards

  constructor() { }

  ngOnInit() {
  }

}