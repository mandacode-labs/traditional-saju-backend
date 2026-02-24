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
 * Access token payload
 */
export interface AccessTokenPayload {
  userID: string;
  userName: string;
}

/**
 * Refresh token payload
 */
export interface RefreshTokenPayload {
  userID: string;
}
