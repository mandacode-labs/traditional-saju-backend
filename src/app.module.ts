import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validate } from './config/validate';
import { AppController } from './app.controller';
import { AuthApiModule } from './modules/auth-api.module';
import { SajuModule } from './modules/saju.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: validate,
      isGlobal: true,
    }),
    AuthApiModule, // Auth API endpoints
    SajuModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
