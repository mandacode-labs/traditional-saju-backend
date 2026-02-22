// Set CONFIG_PATH for tests
process.env.CONFIG_PATH = `${__dirname}/config/config.yaml`;

const mockValue = 'someMockValue';

// Mock Prisma generated modules
jest.mock('../src/generated/prisma/client', () => ({
  Prisma: {
    PrismaClientInitializationError: class extends Error {},
    PrismaClientKnownRequestError: class extends Error {},
    PrismaClientRustPanicError: class extends Error {},
    PrismaClientUnknownRequestError: class extends Error {},
    PrismaClientValidationError: class extends Error {},
    NotFoundError: class extends Error {},
  },
  PrismaClient: class {
    constructor() {}
    $connect() {
      return Promise.resolve();
    }
    $disconnect() {
      return Promise.resolve();
    }
    $on() {
      return this;
    }
    $transaction() {
      return this;
    }
    $use() {
      return this;
    }
    $extends() {
      return this;
    }
  },
  default: {
    Prisma: {
      PrismaClientInitializationError: class extends Error {},
      PrismaClientKnownRequestError: class extends Error {},
      PrismaClientRustPanicError: class extends Error {},
      PrismaClientUnknownRequestError: class extends Error {},
      PrismaClientValidationError: class extends Error {},
      NotFoundError: class extends Error {},
    },
    PrismaClient: class {
      constructor() {}
      $connect() {
        return Promise.resolve();
      }
      $disconnect() {
        return Promise.resolve();
      }
      $on() {
        return this;
      }
      $transaction() {
        return this;
      }
      $use() {
        return this;
      }
      $extends() {
        return this;
      }
    },
  },
}));

jest.mock('../src/generated/prisma/enums', () => ({
  SajuType: {
    DAILY: 'DAILY',
    YEARLY: 'YEARLY',
  },
}));

jest.mock('@prisma/adapter-pg', () => ({
  PrismaPg: class {
    constructor() {}
  },
}));

export default {
  mockValue,
};
