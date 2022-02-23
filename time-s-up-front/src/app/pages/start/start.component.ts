import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Card } from '../../entity/card';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }

  public onChange(event: any) {
    this.gameService.drawNCards(event.target.value);
  }

  public getCards(): Card[] {
    return this.gameService.getCards();
  }

}
