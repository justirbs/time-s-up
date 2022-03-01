import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { timer } from 'rxjs';
import { Card } from 'src/app/entity/card';
import { Team } from 'src/app/entity/team';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  public currentTeam: Team = {name: '', players: [], scores: []};
  public currentPlayer: string = '';
  public currentCard: Card = {id: 0, name: '', fileName: '', themeId: 0, teamName: ''};

  // timer every second
  private timerInterval = timer(0, 1000);
  private timerSubscription: any;


  constructor(private gameService: GameService,
              private router: Router) {
    // CREATE FAKE TEAMS
    if (this.gameService.getTeams().length <= 0) {
      this.gameService.addTeam({name: '1', players: ['Pierre', 'Paul', 'Jacques'], scores: [0, 0, 0]});
      this.gameService.addTeam({name: '2', players: ['Jean', 'Marie'], scores: [0, 0, 0]});
      this.gameService.addTeam({name: '3', players: ['Robert', 'Marcel', 'Jacques', 'Claude'], scores: [0, 0, 0]});
    }
    console.log(this.gameService.getTeams());
    // DELETE ALL TEAMS
    // for (let i = 0; i < this.gameService.getTeams().length; i++) {
    //   this.gameService.removeTeam(this.gameService.getTeams()[i]);
    // }

    this.initTurn();
  }

  ngOnInit(): void {
    
  }

  public getCards(): Card[] {
    return this.gameService.getAllCards();
  }

  public getTimer(): number {
    return this.gameService.getTimer();
  }

  public initTurn(){
    // get the current team
    let teams: Team[] = this.gameService.getTeams();
    let nbrOfTurns = this.gameService.getNbrOfTurns();
    let indexTeam = nbrOfTurns % teams.length;
    this.currentTeam = teams[indexTeam];

    // get the current player
    let indexPlayer = ((nbrOfTurns - indexTeam) / teams.length) % this.currentTeam.players.length;
    this.currentPlayer = this.currentTeam.players[indexPlayer];

    // get the current card
    this.currentCard = this.gameService.getCurrentCard();

    // stop the timer
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
    }
    // reset the timer
    this.gameService.resetTimer();
    // start the timer
    this.startTimer();
  }

  public startTimer(){
    this.timerSubscription = this.timerInterval.subscribe(() => {
        this.gameService.tickTimer();
        if (this.gameService.getTimer() <= 0) {
          this.timesUp();
        }
      });
  }

  public resetGame(){
    this.gameService.resetGame();
    this.router.navigate(['/']);
  }

  public pass(){
    this.gameService.nextCard();
    this.currentCard = this.gameService.getCurrentCard();
  }

  public correct(){
    // go to the next card
    this.gameService.nextCard();
    // set card to found
    this.gameService.foundCard(this.currentCard, this.currentTeam);
    // if no more cards, go to the next round
    if (this.gameService.getCardsNotFound().length <= 0) {
      // go to the next round and change the player
      this.gameService.nextRound();
      this.gameService.nextTurn();
      this.initTurn(); // this function get the new current card
    } else {
      // else, get the new current card
      this.currentCard = this.gameService.getCurrentCard();
    }
  }

  public timesUp(){
    this.gameService.nextTurn();
    this.gameService.nextCard();
    this.initTurn();
  }

}
