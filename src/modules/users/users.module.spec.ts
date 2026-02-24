import { Test } from '@nestjs/testing';

import { UsersModule } from './users.module';
import { IDP_SERVICE_TOKEN, JWT_SERVICE_TOKEN } from '../idp/idp.module';
import { mockProviders } from '../../../test/test-helpers';

describe('UsersModule', () => {
  it('should compile', async () => {
    const module = await Test.createTestingModule({
      imports: [UsersModule],
    })
      .overrideProvider(JWT_SERVICE_TOKEN)
      .useValue(mockProviders.mockJwtService)
      .overrideProvider(IDP_SERVICE_TOKEN)
      .useValue(mockProviders.mockIdpService)
      .compile();

    expect(module).toBeDefined();
    await module.close();
  });
});
