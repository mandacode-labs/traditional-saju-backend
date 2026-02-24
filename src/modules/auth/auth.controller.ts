import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginResponseDto } from './dto/login-response.dto';
import { LoginRequestDto } from './dto/login-request.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @ApiOperation({
    summary: 'Login with OAuth2 ID token via Keycloak Token Exchange',
  })
  @ApiBody({ type: LoginRequestDto })
  @ApiResponse({
    status: 200,
    description: 'Login successful - returns Keycloak tokens',
    type: LoginResponseDto,
  })
  @ApiResponse({ status: 400, description: 'Bad request' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  async login(@Body() body: LoginRequestDto): Promise<LoginResponseDto> {
    const result = await this.authService.login(body.id_token, body.provider);
    return result as LoginResponseDto;
  }
}
