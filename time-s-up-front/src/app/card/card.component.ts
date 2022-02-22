import { Component, Input, OnInit } from '@angular/core';
import { Card } from '../entity/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: Card = {
    "id": 0,
    "name": "",
    "fileName": "",
    "themeId": 0
  };

  constructor() { }

  ngOnInit(): void {
  }

}
