import { Injectable, Logger } from '@nestjs/common';
import { decodeJwt } from 'jose';
import { TokenPayload } from './types/jwt-payload.type';

/**
 * JWT Service interface
 */
export interface IJWTService {
  decodeToken<T = unknown>(token: string): T | null;
  verifyToken(token: string): Promise<boolean>;
  getSubject(token: string): string;
}

/**
 * JWT Service for token operations
 * Abstracts JWT library (jose, jsonwebtoken, etc.)
 */
@Injectable()
export class JwtService implements IJWTService {
  private readonly logger = new Logger(JwtService.name);

  /**
   * Decode JWT token and extract payload
   */
  decodeToken<T = unknown>(token: string): T | null {
    try {
      return decodeJwt<T>(token);
    } catch (error) {
      this.logger.error('Failed to decode token', error);
      return null;
    }
  }

  /**
   * Verify JWT token validity
   * Note: This is a basic implementation. In production, verify signature and expiration
   */
  async verifyToken(token: string): Promise<boolean> {
    try {
      const payload = decodeJwt<TokenPayload>(token);
      const now = Math.floor(Date.now() / 1000);

      if (payload.exp && payload.exp < now) {
        return false;
      }

      return true;
    } catch (error) {
      this.logger.error('Failed to verify token', error);
      return false;
    }
  }

  /**
   * Extract subject (user ID) from token
   */
  getSubject(token: string): string {
    const payload = this.decodeToken<TokenPayload>(token);

    if (!payload || !payload.sub) {
      throw new Error('Token does not contain sub claim');
    }

    return payload.sub;
  }
}
