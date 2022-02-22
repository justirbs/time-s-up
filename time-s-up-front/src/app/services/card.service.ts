import { Injectable } from '@angular/core';
import { Card } from '../entity/card';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private cards: Card[];

  constructor(private http: HttpClient) {
    this.cards = [];
  }

  public getCards(): Card[]{
    return this.cards;
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
        this.cards = data;
      }
    );
  }
}
