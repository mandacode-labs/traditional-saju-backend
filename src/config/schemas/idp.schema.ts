import { z } from 'zod';

export const idpSchema = z.object({
  keycloakUrl: z.string().url().nonempty(),
  keycloakRealm: z.string().nonempty(),
  clientId: z.string().nonempty(),
  clientSecret: z.string().nonempty(),
});

export type IdpConfig = z.infer<typeof idpSchema>;
