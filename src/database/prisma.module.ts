import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

export const PRISMA_SERVICE_TOKEN = 'PrismaService';

@Module({
  providers: [
    {
      provide: PRISMA_SERVICE_TOKEN,
      useClass: PrismaService,
    },
  ],
  exports: [PRISMA_SERVICE_TOKEN],
})
export class PrismaModule {}
