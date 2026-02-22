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
  // Placeholder - use PrismaSajuRecordRepository instead
  async findFirst(_options: FindSajuRecordOptions): Promise<SajuRecord | null> {
    throw new Error('Method not implemented.');
  }

  async create(_dto: CreateSajuRecordDto): Promise<SajuRecord> {
    throw new Error('Method not implemented.');
  }
}
