import { Inject, Injectable } from '@nestjs/common';
import type { IIdpService, TokenResponse } from '../idp/idp.service';
import { IDP_SERVICE_TOKEN } from '../idp/idp.module';

/**
 * Login response with tokens and user ID
 */
export interface LoginResponse extends TokenResponse {
  userId: string;
}

@Injectable()
export class AuthService {
  constructor(@Inject(IDP_SERVICE_TOKEN) private readonly idp: IIdpService) {}

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
