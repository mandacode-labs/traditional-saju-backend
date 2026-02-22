import {
  CreateSajuRecordDto,
  FindSajuRecordOptions,
  ISajuRecordRepository,
  SajuRecord,
  SajuType,
} from '../../src/repositories/saju-record.repository';

export class MockSajuRecordRepository implements ISajuRecordRepository {
  private records: SajuRecord[] = [];

  async findFirst(options: FindSajuRecordOptions): Promise<SajuRecord | null> {
    return (
      this.records.find(
        (r) =>
          r.userPublicID === options.userPublicID &&
          r.type === options.type &&
          r.version === options.version &&
          (!options.gte || r.createdAt >= options.gte) &&
          (!options.lte || r.createdAt <= options.lte),
      ) || null
    );
  }

  async create(dto: CreateSajuRecordDto): Promise<SajuRecord> {
    const record: SajuRecord = {
      id: this.records.length + 1,
      publicID: 'mock-uuid-' + this.records.length,
      data: dto.data,
      type: dto.type,
      version: dto.version,
      createdAt: new Date(),
      userPublicID: dto.userPublicID,
    };
    this.records.push(record);
    return record;
  }

  reset() {
    this.records = [];
  }
}

export const mockSajuRecordRepository = new MockSajuRecordRepository();
