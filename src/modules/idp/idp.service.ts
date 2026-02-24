/**
 * Token exchange response from IDP
 */
export interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_expires_in: number;
  refresh_token: string;
  id_token?: string;
  notBeforePolicy?: number;
  session_state?: string;
  scope?: string;
}

/**
 * IDP Service interface for token exchange and user authentication
 * Abstracts the underlying IDP provider (Keycloak, Auth0, etc.)
 */
export interface IIdpService {
  /**
   * Exchange external IDP token for internal token
   * @param idToken - ID token from external provider (Google, Kakao, etc.)
   * @param provider - Provider identifier
   * @returns Token response with access and refresh tokens
   */
  exchangeToken(idToken: string, provider: string): Promise<TokenResponse>;

  /**
   * Extract user ID from access token
   * @param token - JWT access token
   * @returns User ID (sub claim)
   */
  getUserIdFromToken(token: string): string;
}
