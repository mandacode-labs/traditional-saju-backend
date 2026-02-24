import { Module } from '@nestjs/common';
import { OpenAIService } from './openai.service';

export const AI_SERVICE_TOKEN = 'IAIService';

@Module({
  providers: [
    {
      provide: AI_SERVICE_TOKEN,
      useClass: OpenAIService,
    },
  ],
  exports: [AI_SERVICE_TOKEN],
})
export class AIModule {}

// Re-export interface for external use
export type { IAIService } from './ai.service';
