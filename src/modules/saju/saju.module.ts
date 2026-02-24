import { Module } from '@nestjs/common';
import { AIModule } from '../ai/ai.module';
import { PrismaModule } from '../../database/prisma.module';
import { SajuController } from './saju.controller';
import { YearlySajuService } from './services/yearly-saju.service';
import { DailySajuService } from './services/daily-saju.service';
import { ScoreService } from './services/score.service';
import { PrismaSajuRecordRepository } from './repositories/prisma-saju-record.repository';
import { SAJU_RECORD_REPOSITORY_TOKEN } from './saju.tokens';

@Module({
  imports: [AIModule, PrismaModule],
  controllers: [SajuController],
  providers: [
    YearlySajuService,
    DailySajuService,
    ScoreService,
    {
      provide: SAJU_RECORD_REPOSITORY_TOKEN,
      useClass: PrismaSajuRecordRepository,
    },
  ],
  exports: [SAJU_RECORD_REPOSITORY_TOKEN],
})
export class SajuModule {}

// Re-export tokens and types for external use
export { SAJU_RECORD_REPOSITORY_TOKEN } from './saju.tokens';
export type { ISajuRecordRepository } from './repositories/saju-record.repository.interface';
