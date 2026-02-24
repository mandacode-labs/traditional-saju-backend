import { Module } from '@nestjs/common';
import { AIModule } from '../ai/ai.module';
import { PrismaModule } from '../../database/prisma.module';
import { SajuController } from './saju.controller';
import { YearlySajuService } from './services/yearly-saju.service';
import { DailySajuService } from './services/daily-saju.service';
import { ScoreService } from './services/score.service';
import { PrismaSajuRecordRepository } from './repositories/prisma-saju-record.repository';

@Module({
  imports: [AIModule, PrismaModule],
  controllers: [SajuController],
  providers: [
    YearlySajuService,
    DailySajuService,
    ScoreService,
    PrismaSajuRecordRepository,
  ],
  exports: [PrismaSajuRecordRepository],
})
export class SajuModule {}

// Re-export repository interface for external use
export type { ISajuRecordRepository } from './repositories/saju-record.repository.interface';
