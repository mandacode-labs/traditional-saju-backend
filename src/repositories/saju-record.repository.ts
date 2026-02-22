import { Injectable } from '@nestjs/common';

export enum SajuType {
  DAILY_NORMAL = 'DAILY_NORMAL',
  NEW_YEAR = 'NEW_YEAR',
}

export interface SajuRecord {
  id: number;
  publicID: string;
  data: unknown;
  type: SajuType;
  version: number;
  createdAt: Date;
  userPublicID: string;
}

export interface CreateSajuRecordDto {
  userPublicID: string;
  type: SajuType;
  version: number;
  data: unknown;
}

export interface FindSajuRecordOptions {
  userPublicID: string;
  type: SajuType;
  version: number;
  gte?: Date;
  lte?: Date;
}

export interface ISajuRecordRepository {
  findFirst(options: FindSajuRecordOptions): Promise<SajuRecord | null>;
  create(dto: CreateSajuRecordDto): Promise<SajuRecord>;
}

@Injectable()
export class SajuRecordRepository implements ISajuRecordRepository {
  constructor() {}

  async findFirst(options: FindSajuRecordOptions): Promise<SajuRecord | null> {
    // Implementation will be provided by Prisma
    throw new Error('Method not implemented.');
  }

  async create(dto: CreateSajuRecordDto): Promise<SajuRecord> {
    // Implementation will be provided by Prisma
    throw new Error('Method not implemented.');
  }
}
