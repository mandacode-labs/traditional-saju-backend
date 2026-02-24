import { Test } from '@nestjs/testing';
import { PrismaSajuRecordRepository } from './prisma-saju-record.repository';
import { PRISMA_SERVICE_TOKEN } from '../../../database/prisma.module';
import { SajuType } from '@prisma/client';

describe('PrismaSajuRecordRepository', () => {
  let repository: PrismaSajuRecordRepository;
  let prismaService: {
    sajuRecord: {
      findFirst: jest.Mock<any, any>;
      create: jest.Mock<any, any>;
    };
  };

  beforeEach(async () => {
    const mockFindFirst = jest.fn();
    const mockCreate = jest.fn();

    const module = await Test.createTestingModule({
      providers: [
        PrismaSajuRecordRepository,
        {
          provide: PRISMA_SERVICE_TOKEN,
          useValue: {
            sajuRecord: {
              findFirst: mockFindFirst,
              create: mockCreate,
            },
          },
        },
      ],
    }).compile();

    repository = module.get(PrismaSajuRecordRepository);
    prismaService = module.get(PRISMA_SERVICE_TOKEN);
  });

  it('should be defined', () => {
    expect(repository).toBeDefined();
  });

  describe('findExistingRecord', () => {
    it('should return null when no record exists', async () => {
      prismaService.sajuRecord.findFirst.mockResolvedValue(null);

      const dateRange = { gte: new Date(), lte: new Date() };
      const result = await repository.findExistingRecord(
        'user123',
        SajuType.DAILY_NORMAL,
        1.0,
        dateRange,
      );

      expect(result).toBeNull();

      expect(prismaService.sajuRecord.findFirst).toHaveBeenCalledWith({
        where: {
          userPublicID: 'user123',
          type: SajuType.DAILY_NORMAL,
          version: 1.0,
          createdAt: dateRange,
        },
        orderBy: {
          createdAt: 'desc',
        },
      });
    });

    it('should return record data when record exists', async () => {
      const mockRecord = {
        id: 1,
        publicID: 'abc-123',
        data: { test: 'data' },
        type: SajuType.DAILY_NORMAL,
        version: 1.0,
        createdAt: new Date(),
        userPublicID: 'user123',
      };

      prismaService.sajuRecord.findFirst.mockResolvedValue(mockRecord);

      const dateRange = { gte: new Date(), lte: new Date() };
      const result = await repository.findExistingRecord(
        'user123',
        SajuType.DAILY_NORMAL,
        1.0,
        dateRange,
      );

      expect(result).toEqual({
        id: 1,
        publicID: 'abc-123',
        data: { test: 'data' },
        type: SajuType.DAILY_NORMAL,
        version: 1.0,
        createdAt: mockRecord.createdAt,
        userPublicID: 'user123',
      });
    });
  });

  describe('createRecord', () => {
    it('should create and return record data', async () => {
      const mockRecord = {
        id: 1,
        publicID: 'abc-123',
        data: { test: 'data' },
        type: SajuType.DAILY_NORMAL,
        version: 1.0,
        createdAt: new Date(),
        userPublicID: 'user123',
      };

      prismaService.sajuRecord.create.mockResolvedValue(mockRecord);

      const input = {
        userPublicID: 'user123',
        type: SajuType.DAILY_NORMAL,
        version: 1.0,
        data: { test: 'data' },
      };

      const result = await repository.createRecord(input);

      expect(result).toEqual({
        id: 1,
        publicID: 'abc-123',
        data: { test: 'data' },
        type: SajuType.DAILY_NORMAL,
        version: 1.0,
        createdAt: mockRecord.createdAt,
        userPublicID: 'user123',
      });

      expect(prismaService.sajuRecord.create).toHaveBeenCalledWith({
        data: input,
      });
    });
  });
});
