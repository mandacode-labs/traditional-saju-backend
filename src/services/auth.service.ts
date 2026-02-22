import { Injectable } from '@nestjs/common';
import { IdpService, KeycloakTokenResponse } from './idp.service';

/**
 * Login response with tokens and user ID
 */
export interface LoginResponse extends KeycloakTokenResponse {
  userId: string;
}

@Injectable()
export class AuthService {
  constructor(private readonly idp: IdpService) {}

  /**
   * Login with OAuth2 ID token from external provider (Google, Kakao)
   * Exchanges the external token for a Keycloak token via Token Exchange
   * and extracts user ID from the token
   *
   * @param idToken - The ID token from external provider
   * @param provider - The provider name (e.g., 'google', 'kakao')
   * @returns Keycloak token response with user ID
   */
  async login(idToken: string, provider: string): Promise<LoginResponse> {
    const tokens = await this.idp.exchangeToken(idToken, provider);
    const userId = this.idp.getUserIdFromToken(tokens.access_token);

    return {
      ...tokens,
      userId,
    };
  }
}
