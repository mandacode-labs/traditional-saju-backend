import { ApiProperty } from '@nestjs/swagger';

export class LoginResponseDto {
  @ApiProperty({
    description: 'User ID (sub claim from Keycloak token)',
    example: '12345678-1234-1234-1234-123456789abc',
  })
  userId: string;

  @ApiProperty({
    description: 'Keycloak access token',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  access_token: string;

  @ApiProperty({
    description: 'Token type (usually "Bearer")',
    example: 'Bearer',
  })
  token_type: string;

  @ApiProperty({
    description: 'Access token expiration time in seconds',
    example: 300,
  })
  expires_in: number;

  @ApiProperty({
    description: 'Refresh token expiration time in seconds',
    example: 1800,
  })
  refresh_expires_in: number;

  @ApiProperty({
    description: 'Keycloak refresh token',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
  })
  refresh_token: string;

  @ApiProperty({
    description: 'Keycloak ID token (optional)',
    example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...',
    required: false,
  })
  id_token?: string;

  @ApiProperty({
    description: 'Not-before policy',
    example: 0,
    required: false,
  })
  not_before_policy?: number;

  @ApiProperty({
    description: 'Session state',
    example: 'abc123',
    required: false,
  })
  session_state?: string;

  @ApiProperty({
    description: 'Token scope',
    example: 'openid profile email',
    required: false,
  })
  scope?: string;
}
