import { Inject, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Config } from '../../config/config.schema';
import type { IIdpService, TokenResponse } from './idp.service';
// Import JwtService class for runtime metadata - must be value import, not type-only
import { JwtService } from './jwt.service';
import { JWT_SERVICE_TOKEN } from './idp.module';

/**
 * Error response from Keycloak
 */
interface KeycloakErrorResponse {
  error: string;
  error_description?: string;
}

/**
 * Keycloak implementation of IDP Service
 * Handles token exchange with Keycloak server
 */
@Injectable()
export class KeycloakIdpService implements IIdpService {
  private readonly logger = new Logger(KeycloakIdpService.name);
  private readonly keycloakUrl: string;
  private readonly keycloakRealm: string;
  private readonly clientId: string;
  private readonly clientSecret: string;
  private readonly tokenEndpoint: string;

  constructor(
    private readonly configService: ConfigService<Config, true>,
    @Inject(JWT_SERVICE_TOKEN) private readonly jwtService: JwtService,
  ) {
    const idpConfig = configService.get<Config['idp']>('idp');
    if (!idpConfig) {
      throw new Error('IDP configuration is missing');
    }
    this.keycloakUrl = idpConfig.keycloakUrl;
    this.keycloakRealm = idpConfig.keycloakRealm;
    this.clientId = idpConfig.clientId;
    this.clientSecret = idpConfig.clientSecret;
    this.tokenEndpoint = `${this.keycloakUrl}/realms/${this.keycloakRealm}/protocol/openid-connect/token`;
  }

  /**
   * Exchange external IDP token (Google, Kakao) for Keycloak token
   * Uses Keycloak Token Exchange feature
   */
  async exchangeToken(
    idToken: string,
    provider: string,
  ): Promise<TokenResponse> {
    const params = new URLSearchParams({
      grant_type: 'urn:ietf:params:oauth:grant-type:token-exchange',
      client_id: this.clientId,
      client_secret: this.clientSecret,
      subject_token: idToken,
      subject_issuer: provider,
      audience: this.clientId,
      requested_token_type: 'urn:ietf:params:oauth:token-type:refresh_token',
    });

    const response = await fetch(this.tokenEndpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params.toString(),
    });

    if (!response.ok) {
      const errorText = await response.text();
      this.logger.error(
        `Token exchange failed: ${response.status} ${response.statusText} - ${errorText}`,
      );
      throw new Error(
        `Failed to exchange token with Keycloak: ${response.status} ${response.statusText}`,
      );
    }

    const data = (await response.json()) as
      | TokenResponse
      | KeycloakErrorResponse;

    if ('error' in data) {
      this.logger.error(
        `Keycloak error: ${data.error} - ${data.error_description || 'No description'}`,
      );
      throw new Error(`Token exchange error: ${data.error}`);
    }

    return data;
  }

  /**
   * Extract user ID (sub) from JWT token
   * Delegates to JwtService
   */
  getUserIdFromToken(token: string): string {
    return this.jwtService.getSubject(token);
  }
}
