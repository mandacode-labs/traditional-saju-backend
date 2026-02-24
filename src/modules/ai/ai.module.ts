import { Module } from '@nestjs/common';
import { OpenAIService } from './openai.service';

@Module({
  providers: [OpenAIService],
  exports: [OpenAIService],
})
export class AIModule {}

// Re-export interface for external use
export type { IAIService } from './ai.service';
