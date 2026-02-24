import { SajuType } from '@prisma/client';

/**
 * Date range for queries
 */
export interface DateRange {
  gte: Date;
  lte: Date;
}

/**
 * Saju record data from database
 */
export interface SajuRecordData {
  id: number;
  publicID: string;
  data: unknown;
  type: SajuType;
  version: number;
  createdAt: Date;
  userPublicID: string;
}

/**
 * Input for creating a new saju record
 */
export interface CreateSajuRecordDto {
  userPublicID: string;
  type: SajuType;
  version: number;
  data: unknown;
}

/**
 * Repository interface for Saju record data access
 * Abstracts the underlying database implementation (Prisma, TypeORM, etc.)
 */
export interface ISajuRecordRepository {
  /**
   * Find existing record within date range
   * @param userId - User public ID
   * @param type - Saju type
   * @param version - Data version
   * @param dateRange - Date range to search
   * @returns Existing record or null
   */
  findExistingRecord(
    userId: string,
    type: SajuType,
    version: number,
    dateRange: DateRange,
  ): Promise<SajuRecordData | null>;

  /**
   * Create a new saju record
   * @param data - Record data to create
   * @returns Created record
   */
  createRecord(data: CreateSajuRecordDto): Promise<SajuRecordData>;
}
