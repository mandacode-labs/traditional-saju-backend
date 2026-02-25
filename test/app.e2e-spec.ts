import { Test } from '@nestjs/testing';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppModule } from '../src/app.module';
import { AuthService } from '../src/modules/auth/auth.service';
import {
  AI_SERVICE_TOKEN,
} from '../src/modules/ai/ai.module';
import {
  IDP_SERVICE_TOKEN,
  JWT_SERVICE_TOKEN,
} from '../src/modules/idp/idp.module';
import { PRISMA_SERVICE_TOKEN } from '../src/database/prisma.module';
import {
  SAJU_RECORD_REPOSITORY_TOKEN,
} from '../src/modules/saju/saju.module';
import { mockProviders } from './test-helpers';

describe('AppModule (e2e)', () => {
  const createTestingModule = async () => {
    // Set environment variables for config validation
    process.env.SERVER__NODE_ENV = 'test';
    process.env.SERVER__PORT = '3000';
    process.env.IDP__KEYCLOAK_URL = 'http://localhost:8080';
    process.env.IDP__KEYCLOAK_REALM = 'test';
    process.env.IDP__CLIENT_ID = 'test-client';
    process.env.IDP__CLIENT_SECRET = 'test-secret';
    process.env.OPENAI__API_KEY = 'test-api-key';
    process.env.SCORE__MEAN = '50';
    process.env.SCORE__STD_DEV = '10';

    return await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(ConfigService)
      .useValue(mockProviders.mockConfigService)
      .overrideProvider(PRISMA_SERVICE_TOKEN)
      .useValue(mockProviders.mockPrismaService)
      .overrideProvider(AI_SERVICE_TOKEN)
      .useValue(mockProviders.mockAIService)
      .overrideProvider(JWT_SERVICE_TOKEN)
      .useValue(mockProviders.mockJwtService)
      .overrideProvider(IDP_SERVICE_TOKEN)
      .useValue(mockProviders.mockIdpService)
      .overrideProvider(SAJU_RECORD_REPOSITORY_TOKEN)
      .useValue(mockProviders.mockSajuRecordRepository)
      .compile();
  };

  it('should compile the entire application', async () => {
    const module = await createTestingModule();

    expect(module).toBeDefined();
    const app = module.createNestApplication();
    await app.init();
    await app.close();
    await module.close();
  });

  it('should resolve all dependencies correctly', async () => {
    const module = await createTestingModule();

    const app = module.createNestApplication();
    await app.init();

    // Verify IDP service can be resolved
    const idpService = module.get(IDP_SERVICE_TOKEN);
    expect(idpService).toBeDefined();

    // Verify AuthService can be resolved
    const authService = module.get(AuthService);
    expect(authService).toBeDefined();

    await app.close();
    await module.close();
  });
});
