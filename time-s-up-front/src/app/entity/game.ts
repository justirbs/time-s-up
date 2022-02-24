import { Card } from "./card";
import { Team } from "./team";

export interface Game {
    round: number;
    teams: Team[];
    cards: Card[];
  }