import {
  Controller,
  Get,
  HttpCode,
  UnauthorizedException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth,
} from '@nestjs/swagger';
import { User } from '../decorators/user.decorator';

@ApiTags('user')
@ApiBearerAuth()
@Controller('user')
export class UserController {
  constructor() {}

  @Get('/me')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get current user info' })
  @ApiResponse({ status: 200, description: 'User info retrieved successfully' })
  @ApiResponse({ status: 401, description: 'Unauthorized' })
  getMe(@User('userId') userId?: string): { userId: string } {
    if (!userId) {
      throw new UnauthorizedException('User not authenticated');
    }

    // Return user ID from Gateway-authenticated token
    return { userId };
  }
}
