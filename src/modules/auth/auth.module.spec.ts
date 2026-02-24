import { Test } from '@nestjs/testing';

import { AuthModule } from './auth.module';
import { IDP_SERVICE_TOKEN } from '../idp/idp.module';
import { mockProviders } from '../../../test/test-helpers';

describe('AuthModule', () => {
  it('should compile', async () => {
    const module = await Test.createTestingModule({
      imports: [AuthModule],
    })
      .overrideProvider(IDP_SERVICE_TOKEN)
      .useValue(mockProviders.mockIdpService)
      .compile();

    expect(module).toBeDefined();
    await module.close();
  });
});
