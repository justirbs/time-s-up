import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/entity/card';
import { CardService } from 'src/app/services/card.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private cardService: CardService) { }

  ngOnInit(): void {
  }

  public getCards(): Card[] {
    return this.cardService.getCards();
  }

}
