import { Module } from '@nestjs/common';
import { IdpService } from './idp.service';

@Module({
  providers: [IdpService],
  exports: [IdpService],
})
export class IdpModule {}
