import { Test } from '@nestjs/testing';

import { IdpModule, JWT_SERVICE_TOKEN, IDP_SERVICE_TOKEN } from './idp.module';
import { mockProviders } from '../../../test/test-helpers';

describe('IdpModule', () => {
  it('should compile', async () => {
    const module = await Test.createTestingModule({
      imports: [IdpModule],
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
