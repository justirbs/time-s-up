import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Card } from '../../entity/card';
import { Team } from 'src/app/entity/team';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  public teams: Team[];

  constructor(private gameService: GameService,
              private router: Router) {
    this.teams = this.gameService.getTeams();
  }

  ngOnInit(): void {
  }

  public startGame() {
    this.gameService.drawNCards(10);
    this.router.navigate(['/game']);
    
  }

}
