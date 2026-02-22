import { Module } from '@nestjs/common';
import { AuthController } from '../controllers/auth.controller';
import { AuthService } from '../services/auth.service';
import { IdpModule } from './idp.module';

@Module({
  imports: [IdpModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthApiModule {}
