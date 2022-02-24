import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Game } from '../entity/game';
import { Card } from '../entity/card';
import { Team } from '../entity/team';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private game: Game;

  constructor(private http: HttpClient) {
    const cacheGame = localStorage.getItem('game');

    if (cacheGame !== null) {
      this.game = JSON.parse(cacheGame);
    } else {
      this.game = {round: 0, teams: [], cards: []};
    }
  }

  private saveGame(){
    localStorage.setItem('game', JSON.stringify(this.game));
  }



  public getAllCards(): Card[]{
    return this.game.cards;
  }

  public getCardsNotFound(): Card[]{
    return this.game.cards.filter(card => card.teamName === undefined);
  }

  public drawNCards(nbrOfCard: number){
    const optionRequete = {
      headers: new HttpHeaders({ 
        'Access-Control-Allow-Origin':'*',
      })
    };
    const baseurl = 'http://localhost:3000';
    
    this.http.get<Card[]>(baseurl + '/draw?nbr=' + nbrOfCard, optionRequete).subscribe(
      (data) => {
        this.game.cards = data;
        this.saveGame();
      }
    );
  }

  public foundCard(card: Card, team: Team){
    // update the teamName
    const index = this.game.cards.indexOf(card);
    this.game.cards[index].teamName = team.name;
    // update the score
    const indexTeam = this.game.teams.indexOf(team);
    this.game.teams[indexTeam].scores[this.game.round-1]++;
    // save the game
    this.saveGame();
  }




  public getTeams(): Team[]{
    return this.game.teams;
  }

  public getTeam(teamName: string): Team | null{
    let team = null;
    this.game.teams.forEach(t => {
      if(t.name === teamName){
        team = t;
      }
    });
    return team;
  }

  public addTeam(team: Team){
    this.game.teams.push(team);
    this.saveGame();
  }

  public removeTeam(team: Team){
    const index = this.game.teams.indexOf(team);
    this.game.teams.splice(index, 1);
    this.saveGame();
  }




  public addPlayer(team: Team, player: string){
    const index = this.game.teams.indexOf(team);
    this.game.teams[index].players.push(player);
    this.saveGame();
  }

  public removePlayer(team: Team, player: string){
    const index = this.game.teams.indexOf(team);
    const indexPlayer = this.game.teams[index].players.indexOf(player);
    this.game.teams[index].players.splice(indexPlayer, 1);
    this.saveGame();
  }




  public getRound(): number{
    return this.game.round;
  }

  public nextRound(){
    this.game.round++;
    // for all cards, reset the teamName
    this.game.cards.forEach(card => {
      card.teamName = undefined;
    });
    // for all teams, reset the scores
    this.game.teams.forEach(team => {
      team.scores[this.game.round-1] = 0;
    });
    this.saveGame();
  }
}
