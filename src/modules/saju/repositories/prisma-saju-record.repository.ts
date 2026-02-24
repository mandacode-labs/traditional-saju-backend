import { Inject, Injectable, Logger } from '@nestjs/common';
import { PRISMA_SERVICE_TOKEN } from '../../../database/prisma.module';
import type { PrismaService } from '../../../database/prisma.service';
import { SajuType } from '@prisma/client';
import {
  ISajuRecordRepository,
  DateRange,
  SajuRecordData,
  CreateSajuRecordDto,
} from './saju-record.repository.interface';

/**
 * Prisma implementation of Saju Record Repository
 */
@Injectable()
export class PrismaSajuRecordRepository implements ISajuRecordRepository {
  private readonly logger = new Logger(PrismaSajuRecordRepository.name);

  constructor(
    @Inject(PRISMA_SERVICE_TOKEN) private readonly prisma: PrismaService,
  ) {}

  async findExistingRecord(
    userId: string,
    type: SajuType,
    version: number,
    dateRange: DateRange,
  ): Promise<SajuRecordData | null> {
    try {
      const record = await this.prisma.sajuRecord.findFirst({
        where: {
          userPublicID: userId,
          type: type,
          version: version,
          createdAt: {
            gte: dateRange.gte,
            lte: dateRange.lte,
          },
        },
        orderBy: {
          createdAt: 'desc',
        },
      });

      return record ? this.toData(record) : null;
    } catch (error) {
      this.logger.error('Failed to find existing record', error);
      throw error;
    }
  }

  async createRecord(data: CreateSajuRecordDto): Promise<SajuRecordData> {
    try {
      const record = await this.prisma.sajuRecord.create({
        data: {
          userPublicID: data.userPublicID,
          type: data.type,
          version: data.version,

          data: data.data,
        },
      });

      return this.toData(record);
    } catch (error) {
      this.logger.error('Failed to create record', error);
      throw error;
    }
  }

  private toData(record: {
    id: number;
    publicID: string;
    data: unknown;
    type: SajuType;
    version: number;
    createdAt: Date;
    userPublicID: string;
  }): SajuRecordData {
    return {
      id: record.id,
      publicID: record.publicID,
      data: record.data,
      type: record.type,
      version: record.version,
      createdAt: record.createdAt,
      userPublicID: record.userPublicID,
    };
  }
}
