import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { IdpModule } from '../idp/idp.module';

@Module({
  imports: [IdpModule],
  controllers: [UsersController],
})
export class UsersModule {}
