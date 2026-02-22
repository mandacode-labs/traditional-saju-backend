import {
  BadRequestException,
  Injectable,
  Logger,
  PipeTransform,
} from '@nestjs/common';
import { z } from 'zod';

@Injectable()
export class ZodValidationPipe<T extends z.ZodTypeAny = z.ZodTypeAny>
  implements PipeTransform
{
  constructor(private validator: T) {}

  async transform(value: unknown): Promise<z.infer<T>> {
    return await this.validator.parseAsync(value).catch((error) => {
      Logger.error(
        `ZodValidationPipe: Validation failed for value ${JSON.stringify(
          value,
        )}: ${error}`,
        'ZodValidationPipe',
      );
      throw new BadRequestException('Validation failed');
    });
  }
}
