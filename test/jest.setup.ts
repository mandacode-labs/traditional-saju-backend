// Set required environment variables for all tests
process.env.KEYCLOAK_URL = 'http://localhost:8080';
process.env.KEYCLOAK_REALM = 'test';
process.env.KEYCLOAK_CLIENT_ID = 'test-client';
process.env.KEYCLOAK_CLIENT_SECRET = 'test-secret';
process.env.OPENAI_API_KEY = 'test-key';
process.env.PORT = '3000';
process.env.REDIS_MODE = 'standalone';
process.env.REDIS_HOST = 'localhost';
process.env.REDIS_PORT = '6379';
process.env.DATABASE_URL = 'postgresql://test:test@localhost:5432/test';

// Mock OpenAI to avoid actual API calls
jest.mock('openai', () => {
  return {
    default: jest.fn().mockImplementation(() => ({
      chat: {
        completions: {
          create: jest.fn().mockResolvedValue({
            choices: [
              {
                message: { content: 'Mocked AI response' },
              },
            ],
          }),
          parse: jest.fn().mockResolvedValue({
            choices: [
              {
                message: { parsed: {} },
              },
            ],
          }),
        },
      },
    })),
  };
});

// Mock Prisma Client with enums
jest.mock('@prisma/client', () => {
  const mockPrismaClient = {
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
    $transaction: jest.fn(),
    $use: jest.fn(),
    $on: jest.fn(),
  };

  return {
    PrismaClient: jest.fn(() => mockPrismaClient),
    // Define enums manually
    SajuType: {
      DAILY_NORMAL: 'DAILY_NORMAL',
      NEW_YEAR: 'NEW_YEAR',
    },
  };
});

// Mock jose library for JWT
jest.mock('jose', () => ({
  decodeJwt: jest.fn(() => ({
    sub: 'test-user-id',
    exp: Math.floor(Date.now() / 1000) + 3600,
    iat: Math.floor(Date.now() / 1000),
  })),
  importPKCS8: jest.fn(),
  importSPKI: jest.fn(),
  SignJWT: jest.fn(),
  jwtVerify: jest.fn(),
}));

const mockValue = 'someMockValue';

export default {
  mockValue,
};
