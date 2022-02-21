import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
  Query,
} from '@nestjs/common';
import { CardService } from './card.service';
import { Card as CardModel, Theme as ThemeModel } from '@prisma/client';

@Controller()
export class AppController {
  constructor(private readonly cardService: CardService) {}

  @Get()
  getHello(): string {
    return "Hello World!";
  }

  @Get('draw?')
  async drawNCard(@Query('nbr') nbrOfCard: number): Promise<CardModel[]> {
    return this.cardService.drawNCards(nbrOfCard);
  }
  
}
