import { Card } from "./card";
import { Team } from "./team";

export interface Game {
    round: number;
    teams: Team[];
    cards: Card[];
    turnCounter: number; // Number of turns since the round started
    currentCardId: number; // Id of the current card
    timer: number;
  }