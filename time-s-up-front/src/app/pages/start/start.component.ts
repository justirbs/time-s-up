import { Component, OnInit } from '@angular/core';
import { CardService } from '../../services/card.service';
import { Card } from '../../entity/card';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }

  public onChange(event: any) {
    this.cardService.drawNCards(event.target.value);
  }

  public getCards(): Card[] {
    return this.cardService.getCards();
  }

}
