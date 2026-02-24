import { Test } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';

import { SajuModule } from './saju.module';
import { SAJU_RECORD_REPOSITORY_TOKEN } from './saju.tokens';
import { AI_SERVICE_TOKEN } from '../ai/ai.module';
import { PRISMA_SERVICE_TOKEN } from '../../database/prisma.module';
import { mockProviders } from '../../../test/test-helpers';

describe('SajuModule', () => {
  it('should compile', async () => {
    const module = await Test.createTestingModule({
      imports: [mockProviders.getConfigModule(), SajuModule],
    })
      .overrideProvider(PRISMA_SERVICE_TOKEN)
      .useValue(mockProviders.mockPrismaService)
      .overrideProvider(AI_SERVICE_TOKEN)
      .useValue(mockProviders.mockAIService)
      .overrideProvider(SAJU_RECORD_REPOSITORY_TOKEN)
      .useValue(mockProviders.mockSajuRecordRepository)
      .overrideProvider(ConfigService)
      .useValue(mockProviders.mockConfigService)
      .compile();

    expect(module).toBeDefined();
    await module.close();
  });
});
