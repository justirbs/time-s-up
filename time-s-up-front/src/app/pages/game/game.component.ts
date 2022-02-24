import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/entity/card';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  public getCards(): Card[] {
    return this.gameService.getAllCards();
  }

}
