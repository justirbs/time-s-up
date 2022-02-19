import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
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

  @Get('draw/:n')
  async drawNCard(@Param('n') nbrCards: number): Promise<CardModel[]> {
    return this.cardService.drawNCards(nbrCards);
  }
  
}
