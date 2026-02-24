import { Test } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import { IdpModule } from './idp.module';
import { validate } from '../../config/validate';

describe('IdpModule', () => {
  it('should compile', async () => {
    // Set required environment variables for testing
    process.env.KEYCLOAK_URL = 'http://localhost:8080';
    process.env.KEYCLOAK_REALM = 'test';
    process.env.KEYCLOAK_CLIENT_ID = 'test-client';
    process.env.KEYCLOAK_CLIENT_SECRET = 'test-secret';
    process.env.OPENAI_API_KEY = 'test-key';
    process.env.PORT = '3000';
    process.env.REDIS_MODE = 'standalone';
    process.env.REDIS_HOST = 'localhost';
    process.env.REDIS_PORT = '6379';

    const module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          validate,
        }),
        IdpModule,
      ],
    }).compile();

    expect(module).toBeDefined();
    await module.close();
  });
});
