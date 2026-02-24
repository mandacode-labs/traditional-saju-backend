import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validate } from './config/validate';
import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { SajuModule } from './modules/saju/saju.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      validate: validate,
      isGlobal: true,
    }),
    AuthModule,
    SajuModule,
    UsersModule,
  ],
  controllers: [AppController],
})
export class AppModule {}
