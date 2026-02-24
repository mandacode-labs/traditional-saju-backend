import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { decodeJwt } from 'jose';

export interface UserPayload {
  userId: string;
}

/**
 * Extract user info from JWT token in Authorization header
 * Assumes gateway has already validated the token
 */
export const User = createParamDecorator(
  (data: keyof UserPayload | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest<{
      headers?: { authorization?: string };
      user?: UserPayload;
    }>();

    // If user is already attached, use it
    if (request.user) {
      return data ? request.user[data] : request.user;
    }

    // Extract from Authorization header
    const authHeader = request.headers?.authorization;

    if (!authHeader) {
      return null;
    }

    // Extract token from "Bearer <token>"
    const [, token] = authHeader.split(' ');

    if (!token) {
      return null;
    }

    try {
      // Decode JWT (gateway already verified signature)
      const payload = decodeJwt(token) as { sub?: string };
      const userId = payload?.sub;

      if (!userId) {
        return null;
      }

      const user: UserPayload = { userId };
      request.user = user;
      return data ? user[data] : user;
    } catch {
      return null;
    }
  },
);
