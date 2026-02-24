import { Module } from '@nestjs/common';
import { KeycloakIdpService } from './keycloak.service';
import { JwtService } from './jwt.service';

@Module({
  providers: [KeycloakIdpService, JwtService],
  exports: [KeycloakIdpService, JwtService],
})
export class IdpModule {}

// Re-export types for external use
export type { IIdpService, TokenResponse } from './idp.service';
export type { IJWTService } from './jwt.service';
export type { TokenPayload } from './types/jwt-payload.type';
