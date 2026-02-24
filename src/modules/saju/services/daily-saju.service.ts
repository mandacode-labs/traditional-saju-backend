import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { SajuType } from '@prisma/client';
import { Config } from '../../../config/config.schema';
import { ScoreService } from './score.service';
import type { IAIService } from '../../ai/ai.service';
import type { ISajuRecordRepository } from '../repositories/saju-record.repository.interface';
import {
  DailySajuInput,
  DailySajuResult,
  DailySajuResultSchema,
  DailySajuOpenAIResponseSchema,
} from '../types/daily-saju.type';

@Injectable()
export class DailySajuService {
  static version = 1.0;

  private systemMsg: Config['openai']['systemMessage']['daily'];

  constructor(
    private readonly ai: IAIService,
    private readonly repository: ISajuRecordRepository,
    private readonly scoreService: ScoreService,
    private readonly config: ConfigService<Config, true>,
  ) {
    this.systemMsg =
      this.config.get<Config['openai']>('openai').systemMessage.daily;
  }

  async readSaju(input: DailySajuInput): Promise<DailySajuResult> {
    const score = this.scoreService.generateScore();
    const currentDate = new Date();
    const startOfDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
    );
    const endOfDay = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      currentDate.getDate(),
      23,
      59,
      59,
      999,
    );

    // Check for existing record via repository
    const existing = await this.repository.findExistingRecord(
      input.userId,
      SajuType.DAILY_NORMAL,
      DailySajuService.version,
      { gte: startOfDay, lte: endOfDay },
    );

    // If existing record found, return it
    if (existing) {
      const parsed = await DailySajuResultSchema.parseAsync(
        existing.data,
      ).catch((err) => {
        Logger.error(err, 'DailySajuService');
        throw new InternalServerErrorException('Failed to parse response');
      });

      return parsed;
    }

    // If existing record not found, create a new one
    const response = await this.ai.createStructuredCompletion({
      messages: [
        {
          role: 'system',
          content: this.systemMsg.all,
        },
        {
          role: 'user',
          content: JSON.stringify({
            ...input,
            score,
          }),
        },
      ],
      schema: DailySajuOpenAIResponseSchema,
      schemaName: 'DailySajuResponse',
    });

    const targetData: DailySajuResult = {
      name: input.userName,
      gender: input.gender,
      fortuneScore: score,
      relationship: response.relationship,
      health: response.health,
      romantic: response.romantic,
      totalFortuneMessage: response.totalFortuneMessage,
      todayShortMessage: response.todayShortMessage,
      wealth: response.wealth,
      caution: response.caution,
      birthDateTime: input.birthDateTime,
      questionAnswer: input.question ? response.questionAnswer : null,
    };
    const parsed = await DailySajuResultSchema.parseAsync(targetData).catch(
      (err) => {
        Logger.error(err, 'DailySajuService');
        throw new InternalServerErrorException('Failed to parse response');
      },
    );

    // Save the result via repository
    await this.repository.createRecord({
      userPublicID: input.userId,
      type: SajuType.DAILY_NORMAL,
      version: DailySajuService.version,
      data: parsed,
    });

    return parsed;
  }
}
