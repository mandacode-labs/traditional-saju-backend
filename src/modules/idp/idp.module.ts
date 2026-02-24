import { Module } from '@nestjs/common';
import { KeycloakIdpService } from './keycloak.service';
import { JwtService } from './jwt.service';

export const IDP_SERVICE_TOKEN = 'IIdpService';
export const JWT_SERVICE_TOKEN = 'IJWTService';

@Module({
  providers: [
    {
      provide: JWT_SERVICE_TOKEN,
      useClass: JwtService,
    },
    {
      provide: IDP_SERVICE_TOKEN,
      useClass: KeycloakIdpService,
    },
  ],
  exports: [IDP_SERVICE_TOKEN, JWT_SERVICE_TOKEN],
})
export class IdpModule {}

// Re-export types for external use
export type { IIdpService, TokenResponse } from './idp.service';
export type { IJWTService } from './jwt.service';
export type { TokenPayload } from './types/jwt-payload.type';
