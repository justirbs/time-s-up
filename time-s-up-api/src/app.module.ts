import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { CardService } from './card.service';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [CardService, PrismaService],
})
export class AppModule {}
