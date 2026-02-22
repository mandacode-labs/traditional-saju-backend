import { Injectable } from '@nestjs/common';
import { PrismaService } from '../services/prisma.service';
import {
  CreateSajuRecordDto,
  FindSajuRecordOptions,
  ISajuRecordRepository,
  SajuRecord,
  SajuType,
} from './saju-record.repository';

@Injectable()
export class PrismaSajuRecordRepository implements ISajuRecordRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findFirst(options: FindSajuRecordOptions): Promise<SajuRecord | null> {
    const record = await this.prisma.sajuRecord.findFirst({
      where: {
        userPublicID: options.userPublicID,
        type: options.type as any,
        version: options.version,
        createdAt: options.gte || options.lte
          ? {
              ...(options.gte && { gte: options.gte }),
              ...(options.lte && { lte: options.lte }),
            }
          : undefined,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    if (!record) {
      return null;
    }

    return {
      id: record.id,
      publicID: record.publicID,
      data: record.data,
      type: record.type as SajuType,
      version: record.version,
      createdAt: record.createdAt,
      userPublicID: record.userPublicID,
    };
  }

  async create(dto: CreateSajuRecordDto): Promise<SajuRecord> {
    const record = await this.prisma.sajuRecord.create({
      data: {
        userPublicID: dto.userPublicID,
        type: dto.type as any,
        version: dto.version,
        data: dto.data as any,
      },
    });

    return {
      id: record.id,
      publicID: record.publicID,
      data: record.data,
      type: record.type as SajuType,
      version: record.version,
      createdAt: record.createdAt,
      userPublicID: record.userPublicID,
    };
  }
}
