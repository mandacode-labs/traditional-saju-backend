import { Injectable, OnModuleInit, Logger } from '@nestjs/common';
import { Config } from 'src/config/config.schema';
import { ConfigService } from '@nestjs/config';
import { decodeJwt } from 'jose';

/**
 * JWT payload with sub claim
 */
export interface TokenPayload {
  sub: string;
  exp?: number;
  iat?: number;
  iss?: string;
  aud?: string | string[];
  [key: string]: unknown;
}

/**
 * Keycloak Token Exchange response
 */
export interface KeycloakTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  id_token?: string;
  notBeforePolicy: number;
  session_state?: string;
  scope?: string;
}

/**
 * Error response from Keycloak
 */
interface KeycloakErrorResponse {
  error: string;
  error_description?: string;
}

@Injectable()
export class IdpService implements OnModuleInit {
  private readonly logger = new Logger(IdpService.name);
  private readonly keycloakUrl: string;
  private readonly keycloakRealm: string;
  private readonly clientId: string;
  private readonly clientSecret: string;
  private readonly tokenEndpoint: string;

  constructor(configService: ConfigService<Config, true>) {
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

  async onModuleInit() {
    await this.checkHealth();
  }

  private async checkHealth(): Promise<void> {
    try {
      // Keycloak health check
      const healthUrl = `${this.keycloakUrl}/health/ready`;
      const response = await fetch(healthUrl, {
        method: 'GET',
      });

      if (!response.ok) {
        this.logger.warn(
          `Keycloak health check returned status: ${response.status}. Continuing anyway...`,
        );
      } else {
        this.logger.log('Keycloak health check passed');
      }
    } catch (error) {
      this.logger.warn(
        'Keycloak health check failed, but continuing...',
        error,
      );
    }
  }

  /**
   * Exchange external IDP token (Google, Kakao) for Keycloak token
   * Uses Keycloak Token Exchange feature
   *
   * @param idToken - The ID token from external provider (Google, Kakao)
   * @param provider - The provider name (e.g., 'google', 'kakao')
   * @returns Keycloak token response
   */
  async exchangeToken(
    idToken: string,
    provider: string,
  ): Promise<KeycloakTokenResponse> {
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
      | KeycloakTokenResponse
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
   *
   * @param token - JWT access token
   * @returns User ID (sub claim)
   */
  getUserIdFromToken(token: string): string {
    try {
      const payload = decodeJwt<TokenPayload>(token);
      if (!payload.sub) {
        throw new Error('Token does not contain sub claim');
      }
      return payload.sub;
    } catch (error) {
      this.logger.error('Failed to decode token', error);
      throw new Error('Invalid token format');
    }
  }
}
