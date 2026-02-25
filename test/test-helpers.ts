import { ConfigModule, ConfigService } from '@nestjs/config';
import { Config } from '../src/config/config.schema';
import type { IAIService } from '../src/modules/ai/ai.service';
import type { ISajuRecordRepository } from '../src/modules/saju/repositories/saju-record.repository.interface';
import type { IJWTService } from '../src/modules/idp/jwt.service';
import type {
  IIdpService,
  TokenResponse,
} from '../src/modules/idp/idp.service';

/**
 * Common mock providers for testing
 */
export const mockProviders = {
  /**
   * Mock PrismaService
   */
  mockPrismaService: {
    $connect: jest.fn(),
    $disconnect: jest.fn(),
    sajuRecord: {
      findFirst: jest.fn(),
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
    user: {
      findFirst: jest.fn(),
      create: jest.fn(),
      findMany: jest.fn(),
      findUnique: jest.fn(),
      update: jest.fn(),
      upsert: jest.fn(),
    },
  },

  /**
   * Mock AIService (IAIService)
   */
  mockAIService: {
    createStructuredCompletion: jest.fn(),
    createCompletion: jest.fn(),
    createMultipleCompletions: jest.fn().mockResolvedValue([]),
  } satisfies Partial<IAIService>,

  /**
   * Mock SajuRecordRepository (ISajuRecordRepository)
   */
  mockSajuRecordRepository: {
    findExistingRecord: jest.fn().mockResolvedValue(null),
    createRecord: jest.fn().mockResolvedValue(null),
  } satisfies Partial<ISajuRecordRepository>,

  /**
   * Mock JWTService (IJWTService)
   */
  mockJwtService: {
    getSubject: jest.fn().mockReturnValue('user-123'),
    verifyToken: jest.fn().mockResolvedValue(true),
    decodeToken: jest.fn(),
  } satisfies Partial<IJWTService>,

  /**
   * Mock IdpService (IIdpService)
   */
  get mockIdpService() {
    const base: Partial<IIdpService> = {
      exchangeToken: jest.fn().mockResolvedValue({
        access_token: 'test-token',
        token_type: 'Bearer',
        expires_in: 3600,
        refresh_expires_in: 7200,
        refresh_token: 'refresh-token',
      } satisfies TokenResponse),
      getUserIdFromToken: jest.fn().mockReturnValue('user-123'),
    };
    // Add onModuleInit lifecycle hook (not part of IIdpService interface)
    return {
      ...base,
      onModuleInit: jest.fn(),
    };
  },

  /**
   * Mock ConfigService with test config
   */
  get mockConfigService() {
    const mockConfig: Config = {
      server: {
        nodeEnv: 'test',
        port: 3000,
      },
      idp: {
        keycloakUrl: 'http://localhost:8080',
        keycloakRealm: 'test',
        clientId: 'test-client',
        clientSecret: 'test-secret',
      },
      openai: {
        apiKey: 'test-key',
        systemMessage: {
          daily: {
            all: 'daily all prompt',
          },
          yearly: {
            chart: 'chart prompt',
            general: 'general prompt',
            relationship: 'relationship prompt',
            wealth: 'wealth prompt',
            romantic: 'romantic prompt',
            health: 'health prompt',
            career: 'career prompt',
            waysToImprove: 'ways to improve prompt',
            caution: 'caution prompt',
            questionAnswer: 'question answer prompt',
          },
        },
      },
      score: {
        mean: 50,
        stdDev: 10,
      },
    };

    return {
      get: jest.fn(<T extends keyof Config>(key: T): Config[T] => {
        return mockConfig[key];
      }),
    } as unknown as ConfigService<Config, true>;
  },

  /**
   * Get ConfigModule for testing
   */
  getConfigModule() {
    return ConfigModule.forRoot({
      isGlobal: true,
      ignoreEnvFile: true,
    });
  },
};
